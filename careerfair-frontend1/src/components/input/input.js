import React from "react";
import { ethers } from "ethers";
import abi from "../../artifacts/contracts/careerfair.sol/careerfair.json"


const Input = () => {

    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const contractABI = abi.abi;
    
    const addCompany = async (e) => {
       //e.preventDefault()
       if (ethereum) {
        console.log("")
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const careerfairContract = new ethers.Contract(contractAddress, contractABI, signer);

       try {
          const { ethereum } = window;
          

    
            await careerfairContract.add(company.current.value) 

            

            let companies;
            companies = await careerfairContract.getCompanies();
            
            let arraysize = companies.events[0].args.compArr;

            for (let i = 0; i < arraysize; i++){
                console.log(companies.events[0].args.compArr[i].toString())
            }
            
            
            
          }
        } catch (error) {
          return error
        }
      }
    
    const company = React.useRef()
    
    return (
        <div>
            <form onSubmit={() => {
                addCompany()
                //console.log("Added Company")
            }}>
                <input
                id="CompanyField"
                type="text"
                placeholder="Company Name"
                ref={company}
                />
                <button type="submit">Add Company</button>
                
            </form>
        </div>
    );
};

export default Input;