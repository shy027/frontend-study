import axios from 'axios'
const api = axios.create({
    baseURL: 'https://api.zhihu.com',
    timeout: 8000,
    headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")},`
    }
})

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token")
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
);

api.interceptors.response.use(
    response => {
        return response.data;
    },
    (error) => {
        if(error.response){
            const status = error.response.status;
            switch(status) {
                case 401:
                    console.error('请登录');
                    break;
                case 403:
                    console.error('权限不足，访问被禁止');
                    break;
                case 404:
                    console.error('请求的资源不存在');
                    break;
                case 500:
                    console.error('服务器内部错误');
                    break;
                default:
                        console.error(
                            "请求错误:",
                            error.response.data.message || "未知错误"
                        );
            }
        }else if(error.request){
            console.error("网络连接失败，请检查网络");
            
        }else{
            console.error("请求出错：",error.message);
            
        }
        return Promise.reject(error);
    }
)

export default api;