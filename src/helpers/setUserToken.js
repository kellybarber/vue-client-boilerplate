export default () => ({ 
  auth: { 
    authenticated: localStorage.getItem('token') 
  }
})