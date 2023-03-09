import { ViewPorts } from "../../pages/viewPorts";
import { defaultDevices as devices } from "../_devices/defaultDevices";
import { CustomerRegistration } from "../../pages/customerRegistration";
devices.forEach((device)=>{
    describe(`Displaying customer sign up on -${device.name}`, ()=>{
        const [w,h] = device.viewport
       
        let userData

        before(()=>{
            cy.viewport(w,h)
            cy.clearAllCookies
            cy.fixture('userdata').then((data)=>{
                userData=data


            })
        })
              
        //const serverId = 'rph86t1l'
        //const testemail = userData.email 
        it("customer registration page", ()=>{
        
            const devices = new ViewPorts()
            const register = new CustomerRegistration()

            if (device.isMobile){
                devices.visit()
                register.mobileViewclickOnBreadMenuButton()
                cy.wait(3000)
                register.mobileClickOnSignUp()
                register.clickOnCustomerAccount()
                register.typeFirstName(userData.firstName)
                register.typeLastName(userData.lastName)
                register.typeEmailAddress(`${(userData.email.split("@")[0] + Math.ceil(Math.random()*100))}@${userData.email.split("@")[1]}`)
                register.typePassword(userData.password)
                register.typeConfirmPassword(userData.confirmPassword)
                register.clickCreateAccountButton()

                
                
            
            } else {
                devices.visit()
                register.clickOnRegister()
                register.clickOnCustomerAccount()
                register.typeFirstName(userData.firstName)
                register.typeLastName(userData.lastName)
                register.typeEmailAddress(userData.email)
                register.typePassword(userData.password)
                register.typeConfirmPassword(userData.confirmPassword)
                register.clickCreateAccountButton()
            }
        })
    })
})






 



