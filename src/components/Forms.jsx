import React from "react"
import {TextField, Button} from '@mui/material'
import { useState } from "react"



function Forms ({todoList, setTodolist}){
 const [valueI, setValuei] =useState ()

 function addItem (){
    if (valueI.length <= 0){
        alert('Você precisa adicionar alguma tarefa')
        return
    }
        let itemIndex = todoList.indexOf(valueI)
    if (itemIndex >= 0){
        alert('Esta tarefa já existe, por favor adicione uma tarefa não existente')
        return
    }

  setTodolist([...todoList, valueI])
  setValuei('')
 }

    return( 
            <div style={{ display:'flex', justifyContent:'center'}}>    
                <TextField  id="filled-basic" label="Tarefa" value={valueI} onChange={value => setValuei (value.target.value)} variant="filled" /> 
                <Button variant="contained" onClick={ addItem }>Add</Button>  
            </div>        
    )

}



export default Forms