let person = {

    people_num : 7,
    last_name : "Paruthi",

    Grandfather : {
        name : "Surinder Kumar",
        nickname: "dadaji",
        age : 73, 
        languages: ["Punjabi", "Bengali", "Hindi" , "English"],
        isKind : true ,
        favFoods :["Butter", "Fresh Fruits and Veggies"],
        marriage: {
            istrue : true,
            years : "50",
        },
        favourites : "I love how selfless he is, no matter how much or how little he has to give",
        birthPlace: "Sonipat",
        job: "Businessman",
        spotify: "",
        image : "",
    },

    Grandmother : {
        name : "Satish",
        nickname : "dadima",
        age : 73, 
        languages: ["Punjabi", "Bengali", "Hindi" , "English", "Marathi"],
        isKind : true ,
        favFoods : ["Egg roll", "Sev Papri", "Puchka"],
        marriage: {
            istrue : true,
            years : "50",
        },
        favourites : "My grandmother has an insane amount of wisdom, about anything and everything, she loves feeding people constantly",
        birthPlace: "Mumbai",
        job: "Mother",
        spotify: "",
        image : "",
    },

    Mother : {
        name : "Charu Dutt",
        nickname : "maa",
        age : 40, 
        languages: ["English", "Hindi"],
        isKind : false ,
        favFoods : ["Gol Gappe", "Cassata ice cream"],
        marriage: {
            istrue : true,
            years : "45",
        },
        favourites : "She gets shit done",
        birthPlace: "Rajouri",
        job: "Mother",
        spotify: "",
        image : "",
    },

    father : {
        name : "Vineet",
        age : 44, 
        languages: ["Punjabi", "Bengali", "Hindi" , "English"],
        isKind : true ,
        favFoods : ["Mutton Rogan Josh", "Laal Maas"],
        marriage: {
            istrue : true,
            years : "55",
        },
        favourites : "My father is caring and confident or whatever",
        birthPlace: "delhi",
        job: "Businessman",
        spotify: "",
        image : "",
    },

    Sister : {
        name : "Chahat",
        age : 24, 
        languages: ["Punjabi", "Hindi" , "English"],
        isKind : true ,
        favFoods : ["Rajma Chawal", "Mutton"],
        marriage: {
            istrue : false,
            years : "24",
        },
        favourites : "I love how she cooks for me in the middle of the night when I get snacky. I always have so much fun with her",
        birthPlace: "Delhi",
        job: "Corporate girlie",
        spotify: "",
        image : "",
    },

    brother : {
        name : "Kiaan",
        age : 11, 
        languages: ["Hindi" , "English"],
        isKind : true ,
        favFoods : ["Dal Makhani", "Rajma Chawal"],
        marriage: {
            istrue : false,
            years : 0,
        },
        favourites : "I love everything about him. He is my jaan.",
        birthPlace: "Delhi",
        job: "Baby",
        spotify: "",
        image : "",
    },

    sanchi : {
        name : "Sanchi",
        age : 21, 
        languages: ["Punjabi", "Hindi" , "English"],
        isKind : false ,
        favFoods : ["Momos", "Gol Gappe"],
        marriage: {
            istrue : false,
            years :0,
        },
        favourites : "I am brave",
        birthPlace: "Rohini",
        job: "Artist",
        spotify: "",
        image : "",
    }

};


function createFamilyMember(member, root){   
    // create
    const familyMemberContainer = document.createElement('div')
    familyMemberContainer.classList.add('family-member')

    // add the name
    const namePara = document.createElement('p')
    namePara.innerText = member.name
    familyMemberContainer.appendChild(namePara)


    // add the age
    const agePara = document.createElement('p')
    agePara.innerText = member.age
    familyMemberContainer.appendChild(agePara)

     //add job
     const jobPara = document.createElement('p')
     jobPara.innerText = member.job
     familyMemberContainer.appendChild(jobPara)

//add isMarried
const marriagePara = document.createElement('p')

if(member.marriage.istrue === true) {
    marriagePara.innerText = "They are Married!" 
   //how to add years here too?
} 
else {
    marriagePara.innerText = "They are Unmarried"
}
familyMemberContainer.append(marriagePara);
 
     //add favFoods
     const foodContainer = document.createElement('div')
     foodContainer.classList.add('food-container')
     
 
     for(let j = 0; j < member.favFoods.length; j++){
         const currFood = member.favFoods[j]
         const foodSpan = document.createElement('span')
         const foodPara = document.createElement('p')
         foodSpan.appendChild(foodPara)
         foodPara.innerText +=  currFood + " "
         foodContainer.appendChild(foodSpan)
     }
 
     familyMemberContainer.appendChild(foodContainer)

      // add languages
    const langContainer = document.createElement('div')
    langContainer.classList.add('lang-container')
    
   

    for(let i = 0; i < member.languages.length; i++){
        const currLang = member.languages[i]
        const langSpan = document.createElement('span')
        const langPara = document.createElement('p')
        langSpan.appendChild(langPara)
        langPara.innerText +=  currLang + " "
        langContainer.appendChild(langSpan)
    }

    familyMemberContainer.appendChild(langContainer)
    
     //add favourites 
     const favPara = document.createElement('p')
    favPara.innerText = member.favourites
    familyMemberContainer.appendChild(favPara)

     //add birthplace
     const bplacePara = document.createElement('p')
     bplacePara.innerText = "They were born in " + member.birthPlace
     familyMemberContainer.appendChild(bplacePara)

    // add isKind
    const kindnessPara = document.createElement('p')

    
    if(member.isKind === true){
        kindnessPara.innerText = "They are very kind!"
    }else{
        kindnessPara.innerText = "They are not that kind..."
    }

    familyMemberContainer.append(kindnessPara)

    //add spotify
    const spotifyLink = document.createElement('p')
     spotifyLink.innerText =  member.spotify
     familyMemberContainer.appendChild(spotifyLink)


    root.append(familyMemberContainer)

}

// document.querySelector(".names").innerHTML = person.Grandfather.name;
const mainContainer = document.getElementsByTagName('main')[0]
createFamilyMember(person.Grandfather,mainContainer )
createFamilyMember(person.Grandmother,mainContainer )
createFamilyMember(person.Mother,mainContainer )
createFamilyMember(person.father, mainContainer)
createFamilyMember(person.brother, mainContainer)
createFamilyMember(person.sanchi, mainContainer)
createFamilyMember(person.Sister, mainContainer)



