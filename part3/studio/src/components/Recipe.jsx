import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.ambitiouskitchen.com/white-chocolate-blueberry-coconut-oatmeal-cookies/";
   let authorPhoto = "https://www.ambitiouskitchen.com/wp-content/uploads/2020/12/ak-mini-bio-2a-1.jpg"; 
   let authorName = "Monique Volz";
   return (
       <div >
          <img src={authorPhoto} alt = {authorName} width ="200px" />
          <div>
             <h3>{authorName}</h3>
             <a href={authorLink}>Ambitious Kitchen</a> 
          </div>
       </div>
    ); 
}

const RecipeIngredients = () => {
   let ingredients = ["flour", "chocolate", "blueberries", "oatmeal", "sugar"];
   return(
       <div>
           <h3>Recipe Ingredients</h3>
           <ul >
               <li>{ingredients[0]}</li>
               <li>{ingredients[1]}</li>
               <li>{ingredients[2]}</li>
               <li>{ingredients[3]}</li>
               <li>{ingredients[4]}</li>
           </ul>
       </div>
   )
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => { 
   return (
       <img
       src="https://www.ambitiouskitchen.com/wp-content/uploads/2019/12/blueberrycookies-2.jpg"
       alt="Blueberry White Chocolate Oatmeal Cookies"
       width= "200px"
       //className={styles.imageUpdates}
     />

   )
};

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
