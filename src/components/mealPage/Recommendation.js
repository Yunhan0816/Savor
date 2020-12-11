import React ,{Component} from "react"
import { auth, db} from "../../services/auth";
import Recipe from "./Recipe"


class  Recommendation2 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          recipes: [],
        }
        this.recipeRf = db.collection('Recipes');
      }

      componentDidMount() {
          this.readRecipe()
      }

      readRecipe = () => {
        const result = [];
        db.collection("Recipes").get().then((querySnapshot) =>{
          querySnapshot.forEach((doc)=>{
            const content = doc.data()
            result.push(content);
          })
       }).then(()=>{
        const recipes = result;
        // console.log(recipes);

        this.setState({recipes: recipes})
         });
       
      } 
    

    render() {
        return (
            <div className = "recommendation-section">

            <div className="recommendation-firstrow-container">
              <div className="recommendation-title">
                <h2>Recommendations</h2>
              </div>
              {/* settings icon */}
              <svg className="settings-icon" width="24" height="24" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                      <path d="M12.9993 15.4539C14.8068 15.4539 16.272 14.0672 16.272 12.3566C16.272 10.646 14.8068 9.25928 12.9993 9.25928C11.1918 9.25928 9.72656 10.646 9.72656 12.3566C9.72656 14.0672 11.1918 15.4539 12.9993 15.4539Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21.0727 15.4541C20.9275 15.7655 20.8842 16.1109 20.9484 16.4458C21.0125 16.7807 21.1812 17.0898 21.4327 17.3331L21.4982 17.3951C21.701 17.5868 21.862 17.8146 21.9718 18.0652C22.0816 18.3159 22.1381 18.5846 22.1381 18.856C22.1381 19.1273 22.0816 19.396 21.9718 19.6467C21.862 19.8973 21.701 20.1251 21.4982 20.3169C21.2956 20.5088 21.0549 20.6611 20.7901 20.7651C20.5252 20.869 20.2413 20.9224 19.9545 20.9224C19.6678 20.9224 19.3839 20.869 19.119 20.7651C18.8542 20.6611 18.6135 20.5088 18.4109 20.3169L18.3455 20.2549C18.0884 20.0169 17.7618 19.8572 17.4079 19.7965C17.054 19.7358 16.689 19.7768 16.36 19.9142C16.0373 20.0451 15.7622 20.2624 15.5683 20.5394C15.3745 20.8164 15.2705 21.141 15.2691 21.4732V21.6487C15.2691 22.1963 15.0392 22.7215 14.6301 23.1088C14.2209 23.496 13.6659 23.7136 13.0873 23.7136C12.5086 23.7136 11.9537 23.496 11.5445 23.1088C11.1353 22.7215 10.9055 22.1963 10.9055 21.6487V21.5558C10.897 21.214 10.7801 20.8826 10.57 20.6046C10.3599 20.3266 10.0663 20.1148 9.72727 19.9968C9.39824 19.8594 9.03324 19.8184 8.67936 19.8791C8.32547 19.9398 7.99892 20.0995 7.74182 20.3375L7.67636 20.3994C7.47373 20.5914 7.2331 20.7437 6.96823 20.8476C6.70336 20.9516 6.41945 21.005 6.13273 21.005C5.846 21.005 5.56209 20.9516 5.29722 20.8476C5.03235 20.7437 4.79172 20.5914 4.58909 20.3994C4.38623 20.2077 4.2253 19.9799 4.11551 19.7293C4.00571 19.4786 3.94919 19.2099 3.94919 18.9386C3.94919 18.6672 4.00571 18.3985 4.11551 18.1478C4.2253 17.8972 4.38623 17.6694 4.58909 17.4777L4.65455 17.4157C4.90604 17.1724 5.07475 16.8633 5.13891 16.5284C5.20308 16.1935 5.15976 15.8481 5.01455 15.5367C4.87626 15.2313 4.64664 14.9709 4.35396 14.7874C4.06128 14.604 3.71831 14.5056 3.36727 14.5042H3.18182C2.60316 14.5042 2.04821 14.2867 1.63904 13.8995C1.22987 13.5122 1 12.987 1 12.4394C1 11.8917 1.22987 11.3665 1.63904 10.9793C2.04821 10.5921 2.60316 10.3745 3.18182 10.3745H3.28C3.64108 10.3665 3.99128 10.2559 4.28505 10.057C4.57883 9.85819 4.8026 9.58029 4.92727 9.25948C5.07249 8.94808 5.11581 8.60265 5.05164 8.26773C4.98748 7.93282 4.81877 7.62377 4.56727 7.38045L4.50182 7.3185C4.29896 7.12673 4.13803 6.899 4.02823 6.64833C3.91843 6.39766 3.86192 6.12896 3.86192 5.8576C3.86192 5.58625 3.91843 5.31755 4.02823 5.06688C4.13803 4.81621 4.29896 4.58848 4.50182 4.39671C4.70445 4.20473 4.94508 4.05242 5.20995 3.94851C5.47482 3.8446 5.75873 3.79111 6.04545 3.79111C6.33218 3.79111 6.61609 3.8446 6.88096 3.94851C7.14583 4.05242 7.38646 4.20473 7.58909 4.39671L7.65455 4.45866C7.91165 4.69667 8.2382 4.85633 8.59209 4.91706C8.94597 4.97779 9.31096 4.93679 9.64 4.79936H9.72727C10.0499 4.66848 10.3251 4.45118 10.5189 4.17418C10.7128 3.89719 10.8168 3.57261 10.8182 3.24038V3.06487C10.8182 2.51723 11.0481 1.99202 11.4572 1.60479C11.8664 1.21755 12.4213 1 13 1C13.5787 1 14.1336 1.21755 14.5428 1.60479C14.9519 1.99202 15.1818 2.51723 15.1818 3.06487V3.15779C15.1832 3.49001 15.2872 3.8146 15.4811 4.09159C15.6749 4.36858 15.9501 4.58589 16.2727 4.71676C16.6018 4.8542 16.9668 4.89519 17.3206 4.83447C17.6745 4.77374 18.0011 4.61408 18.2582 4.37606L18.3236 4.31412C18.5263 4.12213 18.7669 3.96983 19.0318 3.86592C19.2966 3.762 19.5805 3.70852 19.8673 3.70852C20.154 3.70852 20.4379 3.762 20.7028 3.86592C20.9676 3.96983 21.2083 4.12213 21.4109 4.31412C21.6138 4.50589 21.7747 4.73362 21.8845 4.98429C21.9943 5.23496 22.0508 5.50365 22.0508 5.77501C22.0508 6.04637 21.9943 6.31506 21.8845 6.56573C21.7747 6.8164 21.6138 7.04413 21.4109 7.2359L21.3455 7.29785C21.094 7.54117 20.9253 7.85022 20.8611 8.18514C20.7969 8.52005 20.8402 8.86548 20.9855 9.17688V9.25948C21.1237 9.56484 21.3534 9.82527 21.646 10.0087C21.9387 10.1921 22.2817 10.2906 22.6327 10.2919H22.8182C23.3968 10.2919 23.9518 10.5095 24.361 10.8967C24.7701 11.2839 25 11.8091 25 12.3568C25 12.9044 24.7701 13.4296 24.361 13.8169C23.9518 14.2041 23.3968 14.4216 22.8182 14.4216H22.72C22.369 14.423 22.026 14.5214 21.7333 14.7049C21.4406 14.8883 21.211 15.1487 21.0727 15.4541V15.4541Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
    
            <div className="row">
              <div className="col-5">Filter</div>
              <div className="col-5">Sorting</div>
            </div>
    
    {this.state.recipes.map((recipe, index) =>{
     return < Recipe recipe={recipe} index = {index}/>

    })}
    
          
    
        </div>  
        )
    }
}

export default Recommendation2