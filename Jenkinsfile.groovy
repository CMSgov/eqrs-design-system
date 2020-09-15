
@Library("cicd-lib@master")_

import gov.cms.eqrs.*



node("eqrs-maven") {



    stage('checkout') {

        checkout scm

    }

    installAngular(".")

    nexusNpmPublish()

}