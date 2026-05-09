async function loadDatabase(){

const querySnapshot = await getDocs(collection(db,"colleges"));

querySnapshot.forEach((docSnap)=>{
const data = docSnap.data();

appData.colleges[docSnap.id]={
bangla:data.collegeNameBn || "",
english:data.collegeNameEn || "",
established:data.established || "",
phone:data.phone || "",
email:data.email || "",
website:data.website || "",
logo:data.whiteLogo || "",
transparentLogo:data.transparentLogo || "",
signature:data.principalSignature || ""
};
});

}