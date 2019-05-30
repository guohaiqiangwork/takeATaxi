import {web} from "./config.js"

const serviceModule = {
    shang: {
        url: web.www+'app/addition/ches.php',
        method: 'post'
    },
    datas:{
        url:web.webUrl+'basic/data/hospital.php',
        method: 'get'
    }
};


const ApiSetting = { ...serviceModule
}
export default ApiSetting
