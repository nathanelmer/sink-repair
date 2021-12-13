import { getRequests, deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", (click) => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


const requestToListElement = (newRequest) => {
    return `<li class="request"> Request #${newRequest.id} The owner says: ${newRequest.description}. The budget is ${newRequest.budget}. The address is ${newRequest.address} and 
    it is needed to be completed by ${newRequest.neededBy}
    <button class="requestDelete" id="request--${newRequest.id}">Delete</button>
    </li>`
}


export const Requests = () => {
    const requests = getRequests() 

    let html = "<ul>"
        
          const requestsArray = requests.map(request => requestToListElement(request))
            

     html += requestsArray.join("")
     html += "</ul>"
    return html
}