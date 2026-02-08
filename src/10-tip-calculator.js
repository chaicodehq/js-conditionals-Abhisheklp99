/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
if (billAmount <= 0 || !Number.isInteger(serviceRating) || serviceRating < 1 || serviceRating > 5) {
    return null;
  }

  switch (serviceRating) {
  case 5:
      return { 
        tipPercentage: 25,
        tipAmount: Number((billAmount * 0.25).toFixed(2)),
        totalAmount: Number((billAmount + (billAmount * 0.25)).toFixed(2))
      }
      
    case 4:
      return { 
        tipPercentage: 20,
        tipAmount: Number((billAmount * 0.20).toFixed(2)),
        totalAmount: Number((billAmount + (billAmount * 0.20)).toFixed(2))
      }
      
    case 3:
      return { 
        tipPercentage: 15,
        tipAmount: Number((billAmount * 0.15).toFixed(2)),
        totalAmount: Number((billAmount + (billAmount * 0.15)).toFixed(2))
      }
      
    case 2:
      return { 
        tipPercentage: 10,
        tipAmount: Number((billAmount * 0.10).toFixed(2)),
        totalAmount: Number((billAmount + (billAmount * 0.10)).toFixed(2))
      }
      
    case 1:
      return { 
        tipPercentage: 5,
        tipAmount: Number((billAmount * 0.05).toFixed(2)),
        totalAmount: Number((billAmount + (billAmount * 0.05)).toFixed(2))
      }
  
    default:
      return null
  }



}
