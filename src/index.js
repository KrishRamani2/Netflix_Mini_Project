import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Cards'
import './index.css'

ReactDOM.render(
   <>
   <div style={{display:'flex' , flexDirection:'row'}}>
   < Card imgsrc = "https://wallpapercave.com/wp/wp4056410.jpg"
   title="A Netflix Original Series"
   sname="DARK"
   link ="https://www.netflix.com/in/title/80100172"
   />

   < Card 
   imgsrc = "https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg"
   title="A Netflix Original Series"
   sname="Stranger Things"
   link ="https://www.netflix.com/in/title/80057281"/>

   < Card imgsrc = "https://pbs.twimg.com/media/F7k9j1yW4AAmDQD?format=jpg&name=900x900"
   title="A Netflix Original Series"
   sname="BECKHAM"
   link ="https://www.netflix.com/in/title/81223488"/>
   </div>

   <div style={{display:'flex' , flexDirection:'row'}}>
   < Card imgsrc = "https://m.media-amazon.com/images/I/71KmUctzvIL._SY342_.jpg"
   title="A Netflix Original Series"
   sname="LOVE,DEATH & ROBOTS"
   link ="https://www.netflix.com/in/title/80174608"/>

   < Card imgsrc = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/10/ozark-cast-character-guide.jpg?q=50&fit=contain&w=767&h=&dpr=1.5"
   title="A Netflix Original Series"
   sname="ozark"
   link ="https://www.netflix.com/in/title/80117552"/>
   </div>

 </>,document.getElementById('root')
)