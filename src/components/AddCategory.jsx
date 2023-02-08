import  { useState } from 'react'

const AddCategory = ({onAddCategories}) => {

  const [inputValue, setInputValue] =useState('')

  const handleChange=(e)=>{
    setInputValue(e.target.value)
  }
const onsubmit=(e)=>{
  e.preventDefault()
 // console.log(inputValue)
 const newValue = inputValue.trim()
 if (newValue<=1) return
 onAddCategories(newValue)
 setInputValue('')

}
  return (
    <form onSubmit={onsubmit}>
      <input
        type='text'
        placeholder='Buscar'
        value={inputValue}
        onChange={handleChange}
        />
    </form>
  )
}

export default AddCategory