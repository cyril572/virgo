  let x=document.getElementById("chat")
  let y=document.getElementById("message")
  let z=document.getElementById("btn")

    z.addEventListener("click",()=>{
       let p=document.createElement("p") 
       p.innerText=y.value 
       p.classList.add("message")
       x.appendChild(p)
       y.value="" 
       
       if(p.innerText.trim() === "hey"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="Hello! How can I assist you today?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }
       else if (p.innerText.trim() === "good day"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="Hello! How can I assist you today?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }
       else if
         (p.innerText.trim() === "hi"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="Hello! How can I assist you today?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }
       else if
         (p.innerText.trim() === "hello"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="Hello! How can I assist you today?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }
      
       else if
         (p.innerText.trim() === "hi there"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="Hello! How can I assist you today?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }
       else if
         (p.innerText.trim() === "wassup"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="Hello! How can I assist you today?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }
       else if
         (p.innerText.trim() === "whats up"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="Hello! How can I assist you today?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }

       else if
         (p.innerText.trim() === "how are you"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="am fine and you? hope u are having a great day?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }
       else if
         (p.innerText.trim() === "how are you doing"){
           let botResponse=document.createElement("h5")
           botResponse.innerText="am fine and you? hope u are having a great day?"
           botResponse.classList.add("bot-message")
           x.appendChild(botResponse)
       }
         else if
            (p.innerText.trim() === "how are you doing today"){
              let botResponse=document.createElement("h5")
              botResponse.innerText="am fine and you? hope u are having a great day?"
              botResponse.classList.add("bot-message")
              x.appendChild(botResponse)
         }
         else if
            (p.innerText.trim() === "how are you today"){
              let botResponse=document.createElement("h5")
              botResponse.innerText="am fine and you? hope u are having a great day?"
              botResponse.classList.add("bot-message")
              x.appendChild(botResponse)
         }
         else if
            (p.innerText.trim() === "how is your day going"){
              let botResponse=document.createElement("h5")
              botResponse.innerText="am fine and you? hope u are having a great day?"
              botResponse.classList.add("bot-message")
              x.appendChild(botResponse)
         }
         else if
            (p.innerText.trim() === "how is your day going so far"){
              let botResponse=document.createElement("h5")
              botResponse.innerText="am fine and you? hope u are having a great day?"
              botResponse.classList.add("bot-message")
              x.appendChild(botResponse)
         }

         else if
            (p.innerText.trim() === "who made you"){
              let botResponse=document.createElement("h5")
              botResponse.innerText="nnaemeka cyril chukwuemeka made me, he is a software engineer graduated from Circo digital academy and a student of the university of calabar"
              botResponse.classList.add("bot-message")
              x.appendChild(botResponse)
         }
         else if
            (p.innerText.trim() === "am good and you"){
              let botResponse=document.createElement("h5")
              botResponse.innerText="same here"
              botResponse.classList.add("bot-message")
              x.appendChild(botResponse)
         }

      else{
              let botResponse=document.createElement("h5")
              botResponse.innerText="nnaemeka cyril chukwuemeka has not yet trained me to respond to that"
              botResponse.classList.add("bot-message")
              x.appendChild(botResponse)
      }
    })

    let e=document.getElementById("emoji")
    let i=document.getElementById("icon")
    e.addEventListener("click",()=> {
        i.classList.toggle("active")
        if (i.classList.contains("active")) {
            i.style.background = "red";
            
        }
        else
        {
            i.style.background = "none";
           
        }
    })
