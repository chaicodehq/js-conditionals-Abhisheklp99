/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *password.split('')@param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  if( typeof password !== 'string') return 'weak';



  function countTotalSpecialChar(){
    const arr='(!@#$%^&*()_+-=[]{}|;:,.<>?)'.split('');
    let totalSpecial=0;
    password.split('').forEach((item)=> arr.includes(item) ? totalSpecial+=1:0 );
    return totalSpecial;
  }


const totalTypesCount = {
  
  totalUpperCase: password.split('').reduce((acc, item) => 
    acc + (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90 ? 1 : 0), 0),

  totalLowerCase: password.split('').reduce((acc, item) => 
    acc + (item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122 ? 1 : 0), 0),

  totalNumbers: password.split('').reduce((acc, item) => 
    acc + (item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57 ? 1 : 0), 0),

  totalSpecialChar: countTotalSpecialChar(),
  len: password.length,
};
  

// if(totalTypesCount.len <=8) return 'weak';
// else if(totalTypesCount.len >=8 && totalTypesCount?.totalLowerCase>=1 && totalTypesCount?.totalUpperCase >=1 ) return 'medium'
// else if(totalTypesCount.len >=8 && totalTypesCount?.totalLowerCase>=1 && totalTypesCount?.totalUpperCase >=1 && totalTypesCount.totalNumbers>=1) return 'strong'
// else  return 'very strong'


let score = 0;


if (totalTypesCount.len >= 8) score++;

if (totalTypesCount.totalLowerCase > 0) score++;

if (totalTypesCount.totalUpperCase > 0) score++;

if (totalTypesCount.totalNumbers > 0) score++;

if (totalTypesCount.totalSpecialChar > 0) score++;

if (score <= 1) return 'weak';
  if (score <= 3) return 'medium';
  if (score === 4) return 'strong';
  return 'very strong';


  }

