import React, {useState} from "react";
import Forms from "../Forms";
import {Container, List} from '@mui/material'
import TodoItem from "../TodoItem";


function Home (){
    const [todoList, setTodolist] = useState([])

    
    return(
        <Container maxWidth='xs' style={{ marginTop:"2rem"}}>
        <Forms setTodolist={setTodolist} todoList={todoList}/>
        <List sx={{ marginTop:'1em' }}>
        
          {todoList.map((item, index) => <TodoItem key={index} setTodolist={setTodolist} todoList={todoList} index={index} task={item}> {item}</TodoItem>)}
        
        </List>
        </Container>
       
    )
} 

export default Home