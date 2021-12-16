function validation()
{
	var fname=document.registration.firstname;
	var lname=document.registration.lastname;
	var gender=document.registration.Gender;
	var pnumber=document.registration.phonenumber;
/*the whole ifs for the variables */
	if(allLettername(fname))
	{
		if(allLetterlast(lname))
		{
			if(genderselect(gender))
			{
				if(Mobile(pnumber))
					{
					}
			}
		}
	}
	return false;
}	
/*the functions for each individual option*/
function allLettername(fname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(fname.value.length==0)
	{
		alert('Please enter first name');
		fname.focus();
		return false;
	}

	else if(fname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('First name must have alphabet characters only');
		fname.focus();
		return false;
	}
}

function allLetterlast(lname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(lname.value.length==0)
	{
		alert('Please enter last name');
		lname.focus();
		return false;
	}
	else if(lname.value.match(letters))
	{
		return true;
		
	}
	else
	{
		alert('last name must have alphabet characters only');
		lname.focus();
		return false;
		
	}
}

function genderselect(gender)
{
	if(gender.value == "Default")
	{
		alert('Select your gender');
		gender.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function Mobile(pnumber)
{ 
	var numbers = /^[0-9]+$/;
	if(pnumber.value.length==0 )
	{
		alert('Please enter contact number');
		pnumber.focus();
		return false;
	}
	else if(pnumber.value.length>10)
	{
		alert('Please enter a valid contact number');
		pnumber.focus();
		return false;

	}
	else if(pnumber.value.match(numbers))
	{
		alert('Form Succesfully Submitted');
		window.location.reload();
		return true;
	}
	else
	{
		alert('Please check your contact number');
		return false;
	}
}