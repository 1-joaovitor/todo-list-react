import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Paper} from '@mui/material';




export default function TodoItem({task, index, todoList, setTodolist}) {
  function exItem (){
   
   let arraTemp = [...todoList]
  arraTemp.splice(index, 1)
   setTodolist(arraTemp)

  }
  return (
      <Paper>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
              <DeleteIcon onClick={exItem}/>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  
                />
              </ListItemIcon>
              <ListItemText   primary= {task}/>
            </ListItemButton>
          </ListItem>
          </Paper>
         
)};