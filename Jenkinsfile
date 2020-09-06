def commitMessage() {
    sh 'git log --format=%B -n 1 HEAD > commitMessage'
    def commitMessage = readFile('commitMessage').trim()
    sh 'rm commitMessage'
    commitMessage
}

def commitSha1() {
    sh 'git rev-parse HEAD > commit'
    def commit = readFile('commit').trim()
    sh 'rm commit'
    commit.substring(0, 7)
}

def commitAuthor() {
    sh 'git log -1 --format="%aE" HEAD > commitAuthor'
    def commitAuthor = readFile('commitAuthor').trim()
    sh 'rm commitAuthor'
    commitAuthor
}

pipeline {
    agent {
        node {
            label 'master'
            customWorkspace "workspace/${env.BRANCH_NAME}/src/git.capitalx.id/dimii/dimiiland"
        }
    }
    environment {
        SERVICE = 'dimiiland'
    }
    options {
        buildDiscarder(logRotator(daysToKeepStr: env.BRANCH_NAME == 'master' ? '90' : '30'))
        gitLabConnection('deployment')
        gitlabBuilds(builds: ['build'])
        skipStagesAfterUnstable()
    }
    triggers {
        gitlab(triggerOnPush: true, triggerOnMergeRequest: true, branchFilterType: 'All', pendingBuildName: 'pending')
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out from Git'
                checkout scm
                script {
                    env.COMMIT_MESSAGE = commitMessage()
                    env.COMMIT_AUTHOR = commitAuthor()
                    env.COMMIT_NUMBER = commitSha1()
                }
            }
        }
        // stage('Code review') {
        //     environment {
        //         scannerHome = tool 'SonarScanner'
        //     }
        //     when {
        //         anyOf { branch 'master'; branch 'develop'; branch 'staging' }
        //     }
        //     steps {
        //         withSonarQubeEnv('ccq') {
        //             sh "${scannerHome}/bin/sonar-scanner"
        //         }
        //         timeout(time: 5, unit: 'MINUTES') {
        //             waitForQualityGate abortPipeline: true
        //         }
        //     }
        // }
        stage('Build and Deploy') {
            environment {
                KUBECONFIG = "${env.JENKINS_HOME}/workspace/${env.BRANCH_NAME}/kube-dimiiland/config"
                VERSION_PREFIX = '1.0'
            }
            stages {
                stage('Deploy to development') {
                    when {
                        branch 'develop'
                    }
                    environment {
                        ALPHA = "${env.VERSION_PREFIX}-alpha${env.BUILD_NUMBER}"
                        NAMESPACE="dimiiland-dev"
                        CREDENTIALS_ID ="gcp-development"
                        BUCKET = "dimiiland-dev"
                        PATTERN = "build/**"
                    }
                    steps {
                        updateGitlabCommitStatus name: 'build', state: 'running'
                        nodejs(nodeJSInstallationName: 'NodeJS 12.x') {
                         sh 'chmod +x build.sh'
                         sh './build.sh $ALPHA'
                            //sh 'chmod +x deploy.sh'
                            //sh './deploy.sh $ALPHA $NAMESPACE'
                        }
                    }
                }
                stage('Test and Build') {
                    when {
                        expression {
                            env.BRANCH_NAME.startsWith('feature/')
                        }
                    }
                    environment {
                        ALPHA = "${env.VERSION_PREFIX}-alpha${env.BUILD_NUMBER}"
                    }
                    steps {
                        updateGitlabCommitStatus name: 'build', state: 'running'
                        nodejs(nodeJSInstallationName: 'NodeJS 12.x') {
                            sh 'chmod +x test.sh'
                            sh './test.sh $ALPHA'
                        }
                    }
                }
                // stage('Deploy to staging') {
                //     when {
                //         branch 'staging'
                //     }
                //     environment {
                //         BETA = "${env.VERSION_PREFIX}-beta${env.BUILD_NUMBER}"
                //         NAMESPACE="dimiiland-dev-0304"
                //         STAGING="staging"
                //     }
                //     steps {
                //         updateGitlabCommitStatus name: 'build', state: 'running'
                //         sh 'chmod +x build.sh'
                //         sh './build.sh $BETA'
                //         sh 'chmod +x deploy.sh'
                //         sh './deploy.sh $BETA $NAMESPACE $STAGING'
                //     }
                // }
                // stage('Deploy to production') {
                //     when {
                //         branch 'master'
                //     }
                //     environment {
                //         VERSION = VersionNumber([
                //             versionNumberString: '${BUILDS_ALL_TIME}',
                //             worstResultForIncrement: 'SUCCESS',
                //             versionPrefix : '1.0.'
                //         ]);
                //         NAMESPACE="dimiiland-prd-0304"
                //     }
                //     steps {
                //         updateGitlabCommitStatus name: 'build', state: 'running'
                //         sh 'chmod +x build.sh'
                //         sh './build.sh $VERSION'
                //         sh 'chmod +x deploy.sh'
                //         sh './deploy.sh $VERSION $NAMESPACE'
                //     }
                // }
            }
            post {
                success {
                    updateGitlabCommitStatus name: 'build', state: 'success'
                }
                failure {
                    updateGitlabCommitStatus name: 'build', state: 'failed'
                }
                unstable {
                    updateGitlabCommitStatus name: 'build', state: 'failed'
                }
            }
        }
    }
    post {
            success {
                emailext(subject: "[dimii-Web] - Job success for ${env.JOB_NAME}", body: "Job success for ${env.JOB_NAME} ${env.VERSION_NAME}-${env.VERSION_CODE} #${env.BUILD_NUMBER} from branch *${env.BRANCH_NAME}* (${env.BUILD_URL}).\nAuthor ${env.COMMIT_AUTHOR} \nCommit `${env.COMMIT_NUMBER}` message :\n```${env.COMMIT_MESSAGE}```", to: "${env.COMMIT_AUTHOR};framadhan@capitalx.id")
                discordSend webhookURL: "https://discord.com/api/webhooks/737199450920845353/HyMQBWolk6KAAIyynGcj66yjUisU0qusPlQwwqjGnbv7J97SHXzRyYDgF-ouU-x_PeuF",
                        title: env.JOB_NAME,
                        link: env.BUILD_URL,
                        result: "SUCCESS",
                        unstable: false,
                        successful: true,
                        description: "Job success for ${env.JOB_NAME} ${env.VERSION_NAME}-${env.VERSION_CODE} #${env.BUILD_NUMBER} from branch **${env.BRANCH_NAME}** (${env.BUILD_URL}).  \n  Author ${env.COMMIT_AUTHOR}  \n  Commit `${env.COMMIT_NUMBER}` message :  \n  ```${env.COMMIT_MESSAGE}```"
            }
            failure {
                emailext(subject: "[dimii-Web] - Job failed for ${env.JOB_NAME}", body: "Job failed for ${env.JOB_NAME} ${env.VERSION_NAME}-${env.VERSION_CODE} #${env.BUILD_NUMBER} from branch *${env.BRANCH_NAME}* (${env.BUILD_URL}).\nAuthor ${env.COMMIT_AUTHOR} \nCommit `${env.COMMIT_NUMBER}` message :\n```${env.COMMIT_MESSAGE}```", to: "${env.COMMIT_AUTHOR};framadhan@capitalx.id")
                discordSend webhookURL: "https://discord.com/api/webhooks/737199450920845353/HyMQBWolk6KAAIyynGcj66yjUisU0qusPlQwwqjGnbv7J97SHXzRyYDgF-ouU-x_PeuF",
                        title: env.JOB_NAME,
                        link: env.BUILD_URL,
                        result: "FAILURE",
                        unstable: false,
                        successful: false,
                        description: "Job failed for ${env.JOB_NAME} ${env.VERSION_NAME}-${env.VERSION_CODE} #${env.BUILD_NUMBER} from branch **${env.BRANCH_NAME}** (${env.BUILD_URL}).  \n  Author ${env.COMMIT_AUTHOR}  \n  Commit `${env.COMMIT_NUMBER}` message :  \n  ```${env.COMMIT_MESSAGE}```"
            }
            unstable {
                emailext(subject: "[dimii-Web] - Job unstable for ${env.JOB_NAME}", body: "Job unstable for ${env.JOB_NAME} ${env.VERSION_NAME}-${env.VERSION_CODE} #${env.BUILD_NUMBER} from branch *${env.BRANCH_NAME}* (${env.BUILD_URL}).\nAuthor ${env.COMMIT_AUTHOR} \nCommit `${env.COMMIT_NUMBER}` message :\n```${env.COMMIT_MESSAGE}```", to: "${env.COMMIT_AUTHOR};framadhan@capitalx.id")
                discordSend webhookURL: "https://discord.com/api/webhooks/737199450920845353/HyMQBWolk6KAAIyynGcj66yjUisU0qusPlQwwqjGnbv7J97SHXzRyYDgF-ouU-x_PeuF",
                        title: env.JOB_NAME,
                        link: env.BUILD_URL,
                        result: "UNSTABLE",
                        unstable: true,
                        successful: false,
                        description: "Job unstable for ${env.JOB_NAME} ${env.VERSION_NAME}-${env.VERSION_CODE} #${env.BUILD_NUMBER} from branch **${env.BRANCH_NAME}** (${env.BUILD_URL}).  \n  Author ${env.COMMIT_AUTHOR}  \n  Commit `${env.COMMIT_NUMBER}` message :  \n  ```${env.COMMIT_MESSAGE}```"
            }
        }
}
