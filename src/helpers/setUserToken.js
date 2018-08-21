export default () => {
  return { 
    auth: { 
      authenticated: localStorage.getItem('token') 
    }
  }
}