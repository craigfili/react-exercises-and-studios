import styles from './Description.module.css'
import React from 'react'
let recipeTitle = "White Chocolate Oatmeal Cookie";
let recipeDescription = "The most delicious, chewy blueberry oatmeal cookies with sweet white chocolate and coconut in every bite. These easy blueberry oatmeal cookies are made with coconut oil for double the coconut flavor and seriously taste like a fresh blueberry muffin. They’re my husband’s absolute favorite cookie!"

const RecipeAuthor = () => {
    let authorLink = "https://www.ambitiouskitchen.com/white-chocolate-blueberry-coconut-oatmeal-cookies/";
    let authorPhoto = "https://www.ambitiouskitchen.com/wp-content/uploads/2020/12/ak-mini-bio-2a-1.jpg"; 
    let authorName = "Monique Volz";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Ambitious Kitchen</a> 
           </div>
        </div>
     ); 
}
    class RecipeDescription extends React.Component {
        render(){
            return(
                <div> 
                 <div>
                  <h1>{recipeTitle}</h1>
                    <p>{recipeDescription}</p>
                 </div>
                 <RecipeAuthor />
                </div>
            )
        }
    }
    export default RecipeDescription;