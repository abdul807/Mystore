import { ViewPorts } from "../../pages/viewPorts";
import { defaultDevices as devices } from "../_devices/defaultDevices";



devices.forEach((device)=>{
    describe(`Displaying on -${device.name}`, ()=>{
        const [w,h] = device.viewport

        before(()=>{
            cy.viewport(w,h)
            cy.clearAllCookies
        })
        beforeEach(()=>{
            cy.visit('/')
        })
    
        it("Navigates to url page", ()=>{
        
            const devices = new ViewPorts()
            if (device.isMobile){
                devices.visit()
            } else
            devices.visit()
        })
    })
})


