
const createDestinationCard=(name,location,photoUrl,description)=>{
    let card=document.createElement('div');
    card.className='card';
    let img=document.createElement('img');
    img.setAttribute('alt',name);
    
    let constantePhotoUrl="images/signpost.jpg";
    if(photoUrl.length===0){
        img.src=constantePhotoUrl;
    }
    else{
        img.setAttribute('src',photoUrl);
    }

    card.appendChild(img);

    let cardBody=document.createElement('div');
    cardBody.className='card-body';

    let cardTitle=document.createElement('h3');
    cardTitle.innerHTML=name;
    cardBody.appendChild(cardTitle);

    let cardSubtitle=document.createElement('h4');
    cardSubtitle.innerHTML=location;
    cardBody.appendChild(cardSubtitle);

    if(description.length!==0){
        let cardText=document.createElement("p");
        cardText.className='card-text';
        cardText.innerHTML=description;
        cardBody.appendChild(cardText);
    }

    let cardDeleteBtn=document.createElement('button');
    cardDeleteBtn.innerHTML='remove';
    cardDeleteBtn.addEventListener('click', removeDestination);
    cardBody.appendChild(cardDeleteBtn);

    card.appendChild(cardBody);
    return card;
}

const removeDestination=(event)=>{
    let card =event.target.parentElement.parentElement;
    card.remove();
}




let hundlesubmit=(e)=>{
    e.preventDefault();
    let destName=e.target.elements['name'].value;
    let destLocation=e.target.elements['location'].value;
    let destPhoto=e.target.elements['photo'].value;
    let destDescription=e.target.elements['description'].value;
    

    for(let i =0; i<e.target.elements.length;i++){
        e.target.elements[i].value='';
    }

    destCard=createDestinationCard(destName,destLocation,destPhoto,destDescription);

    const wishListContainer=document.getElementById('destinations_container');
    if(wishListContainer.children.length===0){
        document.getElementById('title').innerHTML='My Wish List';
    }

    document.querySelector('#destinations_container').appendChild(destCard);



}





let myForm=document.getElementById('destination_details_form');
myForm.addEventListener('submit',hundlesubmit)