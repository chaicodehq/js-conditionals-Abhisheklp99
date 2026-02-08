/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  let finalPrice=0;
   function getTwoPrices(){
      return( (extras?.whippedCream ? 0.50 : 0 ) + ( extras?.extraShot ? 0.75 : 0) )
    }

    // let objSizeType={
    //   "small":"small",
    //   "medium":"medium",
    //   "large":"large",
    //   "regular":'regular',
    //   "latte":"latte",
    //   "cappuccino":"cappuccino",
    //   "mocha":"mocha"
    // }
    let objSizeType = {
  small: true, medium: true, large: true,
  regular: true, latte: true, cappuccino: true, mocha: true
};

if (!objSizeType[size] || !objSizeType[type]){
   return -1;
}

  else {
    
 
    if(size ==='small'){
      if(type === 'regular'){
        // const finalPrice1=extras?.whippedCream ?? 0; 
        // const finalPrice2=extras?.extraShot ?? 0 ;

        finalPrice=getTwoPrices() + 3
      }
      else if(type === 'latte'){
       
        finalPrice=getTwoPrices() +4
      }
      else if(type === 'cappuccino') {
      

        finalPrice=getTwoPrices() + 4.50;
      
      }
      else {
  
        finalPrice=getTwoPrices() + 5
      } 
    }

    else if(size ==='medium'){

           if(type === 'regular'){
        finalPrice= getTwoPrices() + 4 ;

           }
      else if(type === 'latte'){
            finalPrice= getTwoPrices() + 5;
            
      }
      else if(type === 'cappuccino') {
    
        finalPrice=getTwoPrices() + 5.50
      }
      else {
          finalPrice= getTwoPrices() + 6;
      } 


    }
    else {

      
           if(type === 'regular'){
        finalPrice= getTwoPrices() + 5;
        
      }
      else if(type === 'latte'){
            finalPrice= getTwoPrices() + 6 ;
           
      }
      else if(type === 'cappuccino') {
        finalPrice= getTwoPrices() +  6.50;
        
      }
      else {
          finalPrice= getTwoPrices() + 7;
          
      } 


    }



  }

return Math.round(finalPrice * 100) /100

}
