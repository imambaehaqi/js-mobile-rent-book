import Axios from 'axios'
export const getBooks = (dataSource = null, page = 1, sortby = null, search = null, availability = null) => {
  let url = `${dataSource}/?page=${page}`
  if(sortby !== null)
    url += `&sortby=${sortby}`
  if(search !== null )
    url += `&search=${search}`
  if(availability !== null )
    url += `&availability=${availability}`
  return {
    type:'GET_BOOKS',
    payload: Axios.get(url,{
        headers:{
          Authorization : window.localStorage.getItem("token")
        }
      }
    )
  }
}
export const getBookById = (id) => {
  return {
    type:'GET_BOOK_BY_ID',
    payload: Axios.get(`http://localhost:1708/books/${id}`,{
        headers:{
          Authorization : window.localStorage.getItem("token")
        }
      }
    )
  }
}

export const getBookGenres = () => {
  return {
    type:'GET_BOOK_GENRES',
    payload: Axios.get(`http://localhost:1708/books/genre`,{
        headers:{
          Authorization : window.localStorage.getItem("token")
        }
      }
    )
  }
}


export const addBook = (data) => {
  return {
    type:'ADD_BOOKS',
    payload: Axios.post(`http://localhost:1708/books`, data, {
        headers:{
          Authorization : window.localStorage.getItem("token")
        }
      }
    )
  }
}
export const deleteBook = (id) => {
  return {
    type:'DELETE_BOOKS',
    payload: Axios.delete(`http://localhost:1708/books/${id}`,{
        headers:{
          Authorization : window.localStorage.getItem("token")
        }
      }
    )
  }
}
export const editBook = (id, data) => {
  return {
    type:'EDIT_BOOKS',
    payload: Axios.patch(`http://localhost:1708/books/${id}`, data,{
        headers:{
          Authorization : window.localStorage.getItem("token")
        }
      }
    )
  }
}

export const getBookYears = () => {
  return {
    type:'GET_BOOK_YEARS',
    payload: Axios.get(`http://localhost:1708/books/year/`,{
        headers:{
          Authorization : window.localStorage.getItem("token")
        }
      }
    )
  }
}

export const getNewestBooks = () => {
  return {
    type:'GET_NEWEST_BOOKS',
    payload: Axios.get(`http://localhost:1708/books/newest`,{
        headers:{
          Authorization : window.localStorage.getItem("token")
        }
      }
    )
  }
}

export const setAvailability = (bookId,availability) => {
  return {
    type:'SET_BOOK_AVALIABILITY',
    payload: {bookId,availability}
  }
}
