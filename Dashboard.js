import React, { useState } from 'react'
import '../Styles/Dash.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles



function Dashboard() {


  // State for the selected date
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const [occupant, setOccupant] = useState('');

  const [selectedOption, setSelectedOption] = useState('');

  const [selectedOption1, setSelectedOption1] = useState('');
 // State for the selected option
 const [selectedOption2, setSelectedOption2] = useState('');

 const [selectedOption3, setSelectedOption3] = useState('');

 const [selectedOption4, setSelectedOption4] = useState('');

 const [selectedOption5, setSelectedOption5] = useState('');

 const [selectedOption6, setSelectedOption6] = useState('');

 const [selectedOption7, setSelectedOption7] = useState('');

const [selectedOption8, setSelectedOption8] = useState('');

const [selectedOption9, setSelectedOption9] = useState('');

const [selectedOption10, setSelectedOption10] = useState('');

const [selectedOption11, setSelectedOption11] = useState('');

const [selectedOption12, setSelectedOption12] = useState('');

const [selectedOption13, setSelectedOption13] = useState('');

const [selectedOption14, setSelectedOption14] = useState('');

const [selectedOption15, setSelectedOption15] = useState('');

const [selectedOption16, setSelectedOption16] = useState('');

const [selectedOption17, setSelectedOption17] = useState('');

const [selectedOption18, setSelectedOption18] = useState('');

const [selectedOption19, setSelectedOption19] = useState('');

const [selectedOption20, setSelectedOption20] = useState('');

const [selectedOption21, setSelectedOption21] = useState('');

const [selectedOption22, setSelectedOption22] = useState('');

const [selectedOption23, setSelectedOption23] = useState('');

const [selectedOption24, setSelectedOption24] = useState('');

const [selectedOption25, setSelectedOption25] = useState('');


const [selectedOption26, setSelectedOption26] = useState('');

const [selectedOption27, setSelectedOption27] = useState('');

const [selectedOption28, setSelectedOption28] = useState('');

const [selectedOption29, setSelectedOption29] = useState('');

const [selectedOption30, setSelectedOption30] = useState('');


const [selectedOption31, setSelectedOption31] = useState('');

const [selectedOption32, setSelectedOption32] = useState('');

const [selectedOption33, setSelectedOption33] = useState('');

const [selectedOption34, setSelectedOption34] = useState('');

const [selectedOption35, setSelectedOption35] = useState('');

const [selectedOption36, setSelectedOption36] = useState('');

const [selectedOption37, setSelectedOption37] = useState('');

  const handleOccupantChange = (event) => {
    setOccupant(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleOptionChange4 = (event) => {
    setSelectedOption4(event.target.value);
  };

  const handleOptionChange5 = (event) => {
    setSelectedOption5(event.target.value);
  };

  const handleOptionChange6 = (event) => {
    setSelectedOption6(event.target.value);
  };

  const handleOptionChange7 = (event) => {
    setSelectedOption7(event.target.value);
  };

  const handleOptionChange8 = (event) => {
    setSelectedOption8(event.target.value);
  };

  const handleOptionChange9= (event) => {
    setSelectedOption9(event.target.value);
  };


  const handleOptionChange10= (event) => {
    setSelectedOption10(event.target.value);
  };

  const handleOptionChange11= (event) => {
    setSelectedOption11(event.target.value);
  };

  const handleOptionChange12= (event) => {
    setSelectedOption12(event.target.value);
  };

  const handleOptionChange13= (event) => {
    setSelectedOption13(event.target.value);
  };

  const handleOptionChange14= (event) => {
    setSelectedOption14(event.target.value);
  };

  const handleOptionChange15= (event) => {
    setSelectedOption15(event.target.value);
  };

  const handleOptionChange16= (event) => {
    setSelectedOption16(event.target.value);
  };

  const handleOptionChange17= (event) => {
    setSelectedOption17(event.target.value);
  };

  const handleOptionChange18= (event) => {
    setSelectedOption18(event.target.value);
  };

  const handleOptionChange19= (event) => {
    setSelectedOption19(event.target.value);
  };

  const handleOptionChange20= (event) => {
    setSelectedOption20(event.target.value);
  };

  const handleOptionChange21= (event) => {
    setSelectedOption21(event.target.value);
  };

  const handleOptionChange22= (event) => {
    setSelectedOption22(event.target.value);
  };

  const handleOptionChange23= (event) => {
    setSelectedOption23(event.target.value);
  };

  const handleOptionChange24= (event) => {
    setSelectedOption24(event.target.value);
  };

  const handleOptionChange25= (event) => {
    setSelectedOption25(event.target.value);
  };

  const handleOptionChange26= (event) => {
    setSelectedOption26(event.target.value);
  };

  const handleOptionChange27= (event) => {
    setSelectedOption27(event.target.value);
  };

  const handleOptionChange28= (event) => {
    setSelectedOption28(event.target.value);
  };

  const handleOptionChange29= (event) => {
    setSelectedOption29(event.target.value);
  };

  const handleOptionChange30= (event) => {
    setSelectedOption30(event.target.value);
  };

  const handleOptionChange31= (event) => {
    setSelectedOption31(event.target.value);
  };

  const handleOptionChange32= (event) => {
    setSelectedOption32(event.target.value);
  };

  const handleOptionChange33= (event) => {
    setSelectedOption33(event.target.value);
  };


  const handleOptionChange34= (event) => {
    setSelectedOption34(event.target.value);
  };

  const handleOptionChange35= (event) => {
    setSelectedOption35(event.target.value);
  };

  const handleOptionChange36= (event) => {
    setSelectedOption36(event.target.value);
  };

  const handleOptionChange37= (event) => {
    setSelectedOption37(event.target.value);
  };


  return (
    <div className="dashboard-container">
    <div >This is Dashboard</div>
    <form>
    
          <label htmlFor="address">Property Address:</label>
          <input
          type="text"
          id="propertyaddress"
        
          autoComplete="off"
          required
          />
            <label htmlFor="city">City:</label>
          <input
          type="text"
          id="city"
        
          autoComplete="off"
          required
          />
            <label htmlFor="state">State:</label>
          <input
          type="text"
          id="state"
        
          autoComplete="off"
          required
          />
            <label htmlFor="zipcode">Zip Code</label>
          <input
          type="number"
          id="zipcode"
        
          autoComplete="off"
          required
          />
          <br></br>
            <label htmlFor="borrower">Borrower:</label>
          <input
          type="text"
          id="borrower"
        
          autoComplete="off"
          required
          />  <label htmlFor="ownerOfPublicRecord">Owner of Public Record:</label>
          <input
          type="text"
          id="ownerOfPublicRecord"
        
          autoComplete="off"
          required
          />
            <label htmlFor="county">County</label>
          <input
          type="text"
          id="county"
        
          autoComplete="off"
          required
          />
          <br></br>
          <label htmlFor="legalDescription">Legal Description</label>
          <input
          type="text"
          id="legalDescription"
        
          autoComplete="off"
          required
          />
          <br>
    </br>
    <label htmlFor="assessorsParcel">Assesor's Parcel #</label>
          <input
          type="text"
          id="assessorsParcel"
          autoComplete="off"
          required
          />
          <div>
      <label htmlFor="taxYear">Tax Year</label>
      <DatePicker
        id="taxYear"
        selected={selectedDate}
        onChange={handleDateChange}
        autoComplete="off"
        required
      />
    </div>

<label htmlFor="r.e.Taxes">R.E Taxes $</label>
          <input
          type="number"
          id="r.e.Taxes"
          autoComplete="off"
          required
          />
          <br></br>

          <label htmlFor="neighborhoodName">Neighborhood Name</label>
          <input
          type="text"
          id="neighborhoodName"
          autoComplete="off"
          required
          />

<label htmlFor="mapReference">Map Reference</label>
          <input
          type="text"
          id="mapReference"
          autoComplete="off"
          required
          />
          <label htmlFor="censusTract">Census Tract</label>
          <input
          type="text"
          id="censusTract"
          autoComplete="off"
          required
          />
          <br></br>

          
        
  
<div>
        Occupant
        <label>
        <input
          type="radio"
          value="owner"
          checked={occupant === 'owner'}
          onChange={handleOccupantChange}
        />
        Owner
      </label>
      <label>
        <input
          type="radio"
          value="tenant"
          checked={occupant === 'tenant'}
          onChange={handleOccupantChange}
        />
        Tenant
      </label>
      <label>
        <input
          type="radio"
          value="vacant"
          checked={occupant === 'vacant'}
          onChange={handleOccupantChange}
        />
        Vacant
      </label>
      
    Special Assesment

             <label>
        <input
          type="radio"
          value="pud"
          checked={selectedOption === 'pud'}
          onChange={handleOptionChange}
        />
        PUD
      </label>
      <label>
        <input
          type="radio"
          value="hoa"
          checked={selectedOption === 'hoa'}
          onChange={handleOptionChange}
        />
        HOA $

        <input 
  type="radio"
  value="peryear"
  checked={selectedOption1 === 'peryear'}
  onChange={handleOptionChange1} 
/>
per year

<input 
  type="radio"
  value="permonth"
  checked={selectedOption1 === 'permonth'}
  onChange={handleOptionChange1} 
/>
per month
      </label>
</div>
<div>
</div>

<div>
    Property Rights Appraised
    <label>
        <input
          type="radio"
          value="Fee Simple"
          checked={selectedOption2 === 'Fee Simple'}
          onChange={handleOptionChange2}
        />
        Fee Simple
      </label>
      <label>
        <input
          type="radio"
          value="Lease Hold"
          checked={selectedOption2 === 'Lease Hold'}
          onChange={handleOptionChange2}
        />
        Lease Hold
      </label>
</div>

<br></br>

<div>
   Assignment Type
   <label>
  <input
    type="radio"
    value="purchaseTransection"
    checked={selectedOption3 === 'purchaseTransection'} 
    onChange={handleOptionChange3}
  />
  Purchase Transection
</label>
<label>
  <input
    type="radio"
    value="refinanceTransaction"
    checked={selectedOption3 === 'refinanceTransaction'} 
    onChange={handleOptionChange3}
  />
  Refinance Transaction
</label>
<label>
  <input
    type="radio"
    value="other"
    checked={selectedOption3 === 'other'} 
    onChange={handleOptionChange3}
  />
  Other(describe)
</label>
</div>

<div>
<label htmlFor="lender/client">Lender/Client</label>
          <input
          type="text"
          id="lender/client"
          autoComplete="off"
          required
          />

<label htmlFor="adress">Address</label>
          <input
          type="text"
          id="address"
          autoComplete="off"
          required
          />
</div>

<div>
is the subject property currently offered for sale or has it been offered for sale in the twelve months prior to the effective date of this appraisal
<label>
<input
    type="radio"
    value="yes1"
    checked={selectedOption4 === 'yes1'} 
    onChange={handleOptionChange4}
  />Yes
</label>
<label>
<input
    type="radio"
    value="no1"
    checked={selectedOption4 === 'no1'} 
    onChange={handleOptionChange4}
  />No
</label>
</div>

Report data source(s) used, offering price(s), and date(s).
<br></br>
<label>
    <input type="text"/>
</label>
 </form>



    <form>
<div>
    i <label>
    <input type="radio"
    value="did"
    checked={selectedOption5 === 'did'} 
    onChange={handleOptionChange5}/>did
</label>
<label>
    <input 
    type="radio"
    value="didnot"
    checked={selectedOption5 === 'didnot'} 
    onChange={handleOptionChange5}
    />did not analyze the contract for sale for the subject purchase transection. Explain the results of the analysis was not preformed
</label>
<br></br>
  <label>
    <input type="text"/>
  </label>
</div>
<div>
<label htmlFor="contractPrice">Contract Price $</label>
          <input
          type="number"
          id="contractPrice"
          autoComplete="off"
          required
          />

<label htmlFor="dateOfContract">Date Of Contract</label>
          <input
          type="date"
          id="dateOfContract"
          autoComplete="off"
          required
          />
        is the property seller the owner of public record?
         <input  
         type="radio"
    value="yes2"
    checked={selectedOption6 === 'yes2'} 
    onChange={handleOptionChange6}/>
    Yes 
         <input 
          type="radio"
    value="no2"
    checked={selectedOption6 === 'no2'} 
    onChange={handleOptionChange6}/>
    No 
         Data Source(s)
</div>

<div>
    <p>is there any financial assistance (loan charges, sale concessions, gift or downpayment assistance, etc.) to be paid by any party on behalf of the borrower?</p>
    <input 
          type="radio"
          value="yes3"
          checked={selectedOption7 === 'yes3'} 
          onChange={handleOptionChange7}/>
     Yes

    <input      
     type="radio"
    value="no3"
    checked={selectedOption7 === 'no3'} 
    onChange={handleOptionChange7}/> No
   <div>
if yes, report the total dollar and describe the items to be paid
<br></br>
   <input type="text"/> <br></br>
   <input type="text"/>
   </div>
   </div>



   <div class="Neighborhood">

<p>Note Race and racial composition of the neighborhood are not appraisal factors</p>

<div>
    Neighborhood Characteristic<br></br>
    <label htmlFor="location">Location</label>
         


          <input
              type="radio"
              value="urban"
              checked={selectedOption8 === 'urban'} 
              onChange={handleOptionChange8}/>
          
        Urban
         
          <input
          type="radio"
          value="suburban"
          checked={selectedOption8 === 'suburban'} 
          onChange={handleOptionChange8}
          />
          Suburban


          <input
              type="radio"
              value="rural"
              checked={selectedOption8 === 'rural'} 
              onChange={handleOptionChange8}
              />
          Rural
         <br></br>
        
         <label htmlFor="build-up">Build-up</label>


       
          <input
          type="radio"
          value="over75"
          checked={selectedOption9 === 'over75'} 
          onChange={handleOptionChange9}
          />Over 75%
         
      
          <input
           type="radio"
           value="25-75"
           checked={selectedOption9 === '25-75'} 
           onChange={handleOptionChange9}
          />
          25-75

        <input
           type="radio"
           value="under25"
           checked={selectedOption9=== 'under25'} 
           onChange={handleOptionChange9}
          />Under 25%
            <br></br>
            <label htmlFor="growth">Growth</label>

<input
           type="radio"
           value="rapid"
           checked={selectedOption10 === 'rapid'} 
           onChange={handleOptionChange10}
          />Rapid

<input
            type="radio"
            value="stable"
            checked={selectedOption10 === 'stable'} 
            onChange={handleOptionChange10}
          />Stable

<input
            type="radio"
            value="slow"
            checked={selectedOption10=== 'slow'} 
            onChange={handleOptionChange10}
          />Slow
         
</div>
<br></br>
<div>
    One-Unit Housing Trends <br></br>
<label htmlFor="propertyValues">Property Values</label>

<input
          type="radio"
          value="increasing"
          checked={selectedOption11=== 'increasing'} 
          onChange={handleOptionChange11}
          />Increasing


<input
          type="radio"
          value="stable1"
          checked={selectedOption11=== 'stable1'} 
          onChange={handleOptionChange11}
          />Stable


<input
          type="radio"
          value="declining"
          checked={selectedOption11=== 'declining'} 
          onChange={handleOptionChange11}
          />Declining 

          </div>
          <br></br>
          <div>

  <div>
<label htmlFor="propertyValues">Demand/Supply</label> 


<input
          type="radio"
          value="shortage"
          checked={selectedOption12=== 'shortage'} 
          onChange={handleOptionChange12}
          />Shortage


<input
          type="radio"
          value="inBalance"
          checked={selectedOption12=== 'inBalance'} 
          onChange={handleOptionChange12}
          />in Balance


<input
          type="radio"
          value="oversupply"
          checked={selectedOption12=== 'oversupply'} 
          onChange={handleOptionChange12}
          />Over Supply
<br></br>
</div>

<div>

         <label htmlFor="propertyValues">Marketing Time</label>  


<input
          type="radio"
          value="under3mths"
          checked={selectedOption13=== 'under3mths'} 
          onChange={handleOptionChange13}
          />Under 3 mths 


<input
          type="radio"
          value="3-6mths"
          checked={selectedOption13=== '3-6mths'} 
          onChange={handleOptionChange13}
          />3-6 mths 


<input
          type="radio"
          value="6mths"
          checked={selectedOption13=== '6mths'} 
          onChange={handleOptionChange13}
          />Over 6 mths

</div>      

</div>
<br></br>
<div>
    One-Unit Housing
    <br></br>
    PRICE 
    AGE
    Low
    High 
    Pred

<br></br><br></br>

Present Land Use % <br></br>
One-Unit % 2-4 Unit % Multi-Family % Commercial %
<br></br>
Neighborhood Boundaries <br></br>
<input type="text"/> <br></br>
<input type="text"/>
<br></br>
Neighborhood Description <br></br>
<input type="text"/>
<input type="text"/> <br></br>
<label htmlFor='marketConditions'>
Market Conditions (including support for the above conclutions)
</label><br></br>
<input type="text"/> <br></br><br></br>
<input type="text"/>

</div>
</div>


<div className='Site'>
<label htmlFor='site'>Site</label><br></br>
  <label htmlFor='dimensions'>Dimensions: Area  Shape  View</label>
   

</div>


<div>

  <label htmlFor='spesificzoneClassification'>Spesific Zoning Classification</label>

<label htmlFor='zoningDescription'>Zoning description</label><br></br>

<div>
<label htmlFor='zoningcompliance'>Zoning Compliance</label>

<input type='radio'
value="legal"
checked={selectedOption14=== 'legal'} 
onChange={handleOptionChange14}
/>
Legal



<input type='radio'
value="legalNonconforming"
checked={selectedOption14=== 'legalNonconforming'} 
onChange={handleOptionChange14}
/>
Legal Nonconforming (Grandfather Use)

<input type='radio'
value="noZonning"
checked={selectedOption14=== 'noZonning'} 
onChange={handleOptionChange14}
/>
No Zonning

<input type='radio'
value="illegal"
checked={selectedOption14=== 'illegal'} 
onChange={handleOptionChange14}
/>
illegal


</div>

<br></br>

<div>
<label htmlFor='highest'>is the highest and best use of the object property as improved (or as proposed per plans and specifications) the present use?</label>
<input type='radio'
value="yes15"
checked={selectedOption15=== 'yes15'} 
onChange={handleOptionChange15}
/>
Yes

<input type='radio'
value="no15"
checked={selectedOption15=== 'no15'} 
onChange={handleOptionChange15}
/>
No,
<br></br>
<label htmlFor='is'>If No, describe</label>
</div>


<input type='text'/>
<br></br>

<div>
<label htmlFor='utilities'>Utilities</label>
<label htmlFor='public'>Public</label>
<label htmlFor='other'>Other(Describe)</label>
<label htmlFor='off-site'>Off-site-improvements-Type</label>
<label htmlFor='public'>Public</label>
<label htmlFor='private'>Private</label>

<br></br>
<div>
<label htmlFor='electricity'>Electricity</label>
<input type='radio'
value="public16"
checked={selectedOption16=== 'public16'} 
onChange={handleOptionChange16}
/>
<input type='radio'
value="other16"
checked={selectedOption16=== 'other16'} 
onChange={handleOptionChange16}
/>

<label htmlFor='water'>Water</label>
<input type='radio'
value="public17"
checked={selectedOption17=== 'public17'} 
onChange={handleOptionChange17}
/>
<input type='radio'
value="other17"
checked={selectedOption17=== 'other17'} 
onChange={handleOptionChange17}
/>

<label htmlFor='street'>Street</label>
<input type='radio'
value="public18"
checked={selectedOption18=== 'public18'} 
onChange={handleOptionChange18}
/>
<input type='radio'
value="private"
checked={selectedOption18=== 'private'} 
onChange={handleOptionChange18}
/>
</div>
<br></br>
<div>
<label htmlFor='gas'>Gas</label>
<input type='radio'
value="gasPublic"
checked={selectedOption19=== 'gasPublic'} 
onChange={handleOptionChange19}
/>
<input type='radio'
value='gasOther'
checked={selectedOption19=== 'gasOther'} 
onChange={handleOptionChange19}
/>
</div>



<label htmlFor='sanitarySewer'>Sanitary Sewer</label>

<div>
<input type='radio'
value='sewerPublic'
checked={selectedOption20=== 'sewerPublic'} 
onChange={handleOptionChange20}
/>
<input type='radio'
value='sewerOther'
checked={selectedOption20=== 'sewerOther'} 
onChange={handleOptionChange20}
/>
</div>


<div>
<label htmlFor='alley'>Alley</label>
<input type='radio'
value="alleyPublic"
checked={selectedOption21=== 'alleyPublic'} 
onChange={handleOptionChange21}
/>
<input type='radio'
value="alleyOther"
checked={selectedOption21=== 'alleyOther'} 
onChange={handleOptionChange21}
/>
</div>


</div>



<label htmlFor='fema'>FEMA special Flood Hazard Area</label>

<input type='radio'
value='femaYes'
checked={selectedOption22=== 'femaYes'} 
onChange={handleOptionChange22}
/>
Yes

<input type='radio'
value='femaNo'
checked={selectedOption22=== 'femaNo'} 
onChange={handleOptionChange22}
/>
No


<label htmlFor='floodZne'>FEMA Flood Zone</label>
<label htmlFor='femaMap'>FEMA Map #</label>
<label htmlFor='femaMapDate'>FEMA Map Date</label>
<br></br>
<label htmlFor='arehThe'>Are the utilities and off-site improvements typical for the market area? </label>
<input type='radio' 
value='offsiteYes'
checked={selectedOption23=== 'offsiteYes'} 
onChange={handleOptionChange23}
/>
<label htmlFor='yes'>Yes</label>



<input
    type="radio"
    value="offsiteNo"     
    checked={selectedOption23=== 'offsiteNo'} 
    onChange={handleOptionChange23}
        />
<label htmlFor='no'>No</label>
<label htmlFor='if'>If No, describe</label>

<br></br>
<label htmlFor='areThere'>Are there any adverse site conditions or extemal factors (easemnets, encroachments, environmental conditions, land ises, etc.)?</label>
<input
          type="radio"
        value="siteYes"
        checked={selectedOption24=== 'siteYes'} 
        onChange={handleOptionChange24}  
         
        />
<label htmlFor='yes'>Yes</label>
<input
          type="radio"
          value="siteNo"
          checked={selectedOption24=== 'siteNo'} 
          onChange={handleOptionChange24}  
          
        />
<label htmlFor='no'>No</label>
<label htmlFor='if'>If No, describe</label>
<br></br>
<input type="text"/>
<br></br>
<input type="text"/>
<br></br>
<input type="text"/>

</div>
<br></br>
<div className='improvment'>
<div className='generalDescription'>

<label htmlFor='generalDescription'>General Description</label>
<br></br>
<label htmlFor='units'>Units</label>
<input type='radio'
value='unitsOne'
checked={selectedOption25==="unitsOne"}
onChange={handleOptionChange25}
/>
<label htmlFor='one'>One</label>
<input type='radio'
value='unitsOneWith'
checked={selectedOption25==="unitsOneWith"}
onChange={handleOptionChange25}
/>
<label htmlFor='onewith'>One with Accessory Unit</label>
<br></br>
<label htmlFor='ofstories'># of Stories</label>
<br></br>
<label htmlFor='type'>Type</label>
<input type='radio'
value='det'
checked={selectedOption26==="det"}
onChange={handleOptionChange26}
/>
<label htmlFor='det'>Det.</label>

<input type='radio'
value='att'
checked={selectedOption26==="att"}
onChange={handleOptionChange26}
/>
<label htmlFor='att'>Att.</label>
<input type='radio'
value='sDet'
checked={selectedOption26==="sDet"}
onChange={handleOptionChange26}
/>
<label htmlFor='sDet'>S-Det/End Unit</label>
<br></br>
<input type='radio'
value='existing'
checked={selectedOption27==="existing"}
onChange={handleOptionChange27}
/>
<label htmlFor='existing'>Existing</label>


<input type='radio'
value='proposed'
checked={selectedOption27==="proposed"}
onChange={handleOptionChange27}
/>
<label htmlFor='proposed'>Proposed</label>



<input type='radio'
value='underConst'
checked={selectedOption27==="underConst"}
onChange={handleOptionChange27}
/>
<label htmlFor='underconst'>Under Const</label>



<br></br>
<label htmlFor='design'>Design(Style)</label>
<input type='text'/>
<br></br>
<label htmlFor='yearBuilt'>Year Built</label>
<input type='text'/>
<br></br>
<label htmlFor='effectiveage'>Effective Age (Yrs)</label>
<input type='text'/>

</div>

<div className='foundation'>
<input type='radio'
value='concreteSlap'
checked={selectedOption28==="concreteSlap"}
onChange={handleOptionChange28}
/>
<label htmlFor='concreteSlab'>Concrete slap</label>
<input type='radio'
value='crawlSpace'
checked={selectedOption28==="crawlSpace"}
onChange={handleOptionChange28}
/>
<label htmlFor='crawlspace'>Crawl Space</label>

<br></br>



<input type='radio'
value='fullBasement'
checked={selectedOption29==="fullBasement"}
onChange={handleOptionChange29}
/>
<label htmlFor='fullBasement'>Full Basement</label>

<input type='radio'
value='partialBasement'
checked={selectedOption29==="partialBasement"}
onChange={handleOptionChange29}
/>
<label htmlFor='partialBasement'>Partial Basement</label>
<br></br>
<label htmlFor='basementArea'>Basement Area</label>
<input type='text'/>
<label htmlFor='sq'>sq.ft.</label>
<br></br>
<label htmlFor='basementFinish'>Basement Finish</label>
<input type='text'/>
<label htmlFor='%'>%</label>
<br></br>

<input type='radio'
value='outside'
checked={selectedOption30==="outside"}
onChange={handleOptionChange30}
/>
<label htmlFor='outsideEntry/Exit'>Outside Entry/Exit</label>

<input type='radio'
value='sumpPump'
checked={selectedOption30==="sumpPump"}
onChange={handleOptionChange30}
/>
<label htmlFor='sumpPump'>Sump Pump</label>

<div>
<label htmlFor='evidence'>Evidence of </label>
<input type='radio'
value='infestation'
checked={selectedOption31==="infestation"}
onChange={handleOptionChange31}
/>
Infestation

<input type='radio'
value='dampness'
checked={selectedOption31==="dampness"}
onChange={handleOptionChange31}
/>
Dampness

<input type='radio'
value='settlement'
checked={selectedOption31==="settlement"}
onChange={handleOptionChange31}
/>
Settlement
</div>
<br></br>
<div>
  <label htmlFor='exterioirDescription' style={{ marginRight: '20px' }}>Exterior Description</label>
  <label htmlFor='material'>materials/condition</label>
  <br></br>
  <label htmlFor='foundation'>Foundation Walls</label>
  <br></br>
  <label htmlFor='exterior walls'>Exterior Walls</label>
<br></br>
<label htmlFor='roofsurface'>Roof Surface</label>
<br></br>
<label htmlFor='Gutters'>Gutters & Downspouts</label>
<br></br>
<label htmlFor='windowType'>Window Type</label>
<br></br>
<label htmlFor='stormSash'>Strom Sash/Insulated</label>
<br></br>
<label htmlFor='screen'>Screen</label>

</div>
<br></br>

<div>
<label htmlFor='interior' style={{ marginRight: '20px' }}>interior</label>
<label htmlFor='materials/condition'>materials/condition</label>
<label htmlFor='floors'>Floors</label>
<br></br>
<label htmlFor='walls'>Walls</label>
<br></br>
<label htmlFor='trim/finish'>Trim/Finish</label>
<br></br>
<label htmlFor='bathFloor'>Bath Floor</label>
<br></br><label htmlFor='bathWainscot'>Bath Wainscot</label>
</div>
<br></br>
<div>
  <label htmlFor='attic'>Attic</label>
  <br></br>
  <input type='radio'
value='none'
checked={selectedOption31==="none"}
onChange={handleOptionChange31}
/>
None
<input type='radio'
value='dropstair'
checked={selectedOption31==="dropstair"}
onChange={handleOptionChange31}
/>
Drop Stair
<input type='radio'
value='stairs'
checked={selectedOption31==="Stairs"}
onChange={handleOptionChange31}
/>
Stairs

<input type='radio'
value='floor'
checked={selectedOption31==="floor"}
onChange={handleOptionChange31}
/>
Floor

<input type='radio'
value='scuttle'
checked={selectedOption31==="scuttle"}
onChange={handleOptionChange31}
/>
Scuttle


<input type='radio'
value='finished'
checked={selectedOption31==="finished"}
onChange={handleOptionChange31}
/>
Finished



<input type='radio'
value='heated'
checked={selectedOption31==="heated"}
onChange={handleOptionChange31}
/>
Heated



</div>

<br></br>

<div>
<label htmlFor='heating'>Heating</label>
<br></br>
<input type='radio'
value='fwa'
checked={selectedOption32==="fwa"}
onChange={handleOptionChange32}
/>
FWA

<input type='radio'
value='hwbb'
checked={selectedOption32==="hwbb"}
onChange={handleOptionChange32}
/>
HWBB

<input type='radio'
value='radiant'
checked={selectedOption32==="radiant"}
onChange={handleOptionChange32}
/>
Radiant

<input type='radio'
value='otherheat'
checked={selectedOption32==="otherheat"}
onChange={handleOptionChange32}
/>
Other
<label htmlFor='fuel'>Fuel</label>
<br></br>

<label htmlFor='cooling'>Cooling</label>

<input type='radio'
value='centralAir'
checked={selectedOption33==="centralAir"}
onChange={handleOptionChange33}
/>
Central Air Conditioning

<input type='radio'
value='indivudialcooling'
checked={selectedOption33==="indivudialcooling"}
onChange={handleOptionChange33}
/>
Individual

<input type='radio'
value='coolingOther'
checked={selectedOption33==="coolingOther"}
onChange={handleOptionChange33}
/>
Other
</div>

<br></br>

<div>

  <label htmlFor='amenities'>Amenities</label>
  <br></br>
  <input type='radio'
value='woodstove'
checked={selectedOption34==="woodstove"}
onChange={handleOptionChange34}
/>
Woodstove(s) #


  <input type='radio'
value='fireplace'
checked={selectedOption34==="fireplace"}
onChange={handleOptionChange34}
/>
Fireplace(S) # 


  <input type='radio'
value='fence'
checked={selectedOption34==="fence"}
onChange={handleOptionChange34}
/>
Fence

  <input type='radio'
value='patioDeck'
checked={selectedOption34==="patioDeck"}
onChange={handleOptionChange34}
/>
Patio/Deck



<input type='radio'
value='porch'
checked={selectedOption34==="porch"}
onChange={handleOptionChange34}
/>
Porch

<input type='radio'
value='pool'
checked={selectedOption34==="pool"}
onChange={handleOptionChange34}
/>
Pool

<input type='radio'
value='otherAmetinities'
checked={selectedOption34==="otherAmetinities"}
onChange={handleOptionChange34}
/>
Other
</div>
<br></br>
<div>
  <label htmlFor='carStorage'>Car Storage</label>
  <input type='radio'
value='carStorageNone'
checked={selectedOption35==="carStorageNone"}
onChange={handleOptionChange35}
/>
None

<input type='radio'
value='carStorageDriway'
checked={selectedOption35==="carStorageDriway"}
onChange={handleOptionChange35}
/>
Driveway  # of cars

</div>

<div>
  <label htmlFor='driwaySurface'>Driway Surface</label>

  <input type='radio'
value='garage'
checked={selectedOption36==="garage"}
onChange={handleOptionChange36}
/>
Garage  # of cars

<input type='radio'
value='carport'
checked={selectedOption36==="carport"}
onChange={handleOptionChange36}
/>
Carport # of Cars
</div>
<br></br>
<div>

<label htmlFor='appliances'>Appliances</label>

<input type='checkbox'
value='range/Oven'

/>
Range/Oven

<input type='checkbox'
value='dishwasher'

/>
Dishwasher

<input type='checkbox'
value="disposal"
/>
Disposal
<input type='checkbox'
value="microwave"
/>
Microwave

<input type='checkbox'
value="washer/Dryer"
/>
Washer/Dryer

<input type='checkbox'
value="appliences/other" 
/>
Other (decribe)
</div>
<br></br>

<div>
  <label htmlFor='area'>Finished area above grade contains  Rooms  Bedrooms  Bath(s)    square Feet of Gross Livinf Area above Grade</label>
</div>
</div>





</div>
    </form>

    </div>

  )
}

export default Dashboard