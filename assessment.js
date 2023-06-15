// 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

            //process
// class-Recipe
// Sub classes-`MoroccanRecipe`,
//             `EthiopianRecipe`,
//             `NigerianRecipe
//method-getAfricancuisinedetails
              //output
// Atributtes- unique ingredients
//             preparation Time
//             cooking method
//             nutritional information
class Recipe{
    constructor(uniqueIngredients,preparatinTime,cookingMethod){
        this.uniqueIngredients = uniqueIngredients
        this.preparatinTime = preparatinTime
        this.cookingMethod = cookingMethod
        
    }
    getAfricancuisinedetails(){
        return`${this.constructor.name} uses ${this.uniqueIngredients} and takes  ${this.preparatinTime} 
    minutes to prepare and the cooking method is to${this.cookingMethod} ` }

    
}
class MoroccanRecipe extends Recipe{
    nutritionalInformation="It gives you a finer skin tone"
}
class EthiopianRecipe extends Recipe{
    nutritionalInformation="It makes your hair grow longer"
}
class NigerianRecipe extends Recipe{
    nutritionalInformation="It makes your bones stronger"
}
let recipe = new MoroccanRecipe(['Carrots','peanuts', 'and milk '],20,'simmer in a water bath')
console.log(recipe.getAfricancuisinedetails());
let recipe2 = new EthiopianRecipe(['Carrots','peanuts', 'and milk '],20, 'boil in with salt')
console.log(recipe2.getAfricancuisinedetails());
let recipe3 = new NigerianRecipe(['sugar','cassava', 'and water '],20,' shallow fry')
console.log(recipe3.getAfricancuisinedetails());