import HornedBeast from "./HornedBeast";

export default function Gallery({data, handleShowModal, horns}) {
   // const filteredHorns = data.filter(function (beast) {
   //     return beast.horns == horns || horns == "";
   // });

   // the above written as an arrow function 
   // instead of mapping through data in the return, you map through filteredHorns
   // filteredHorns is the original data array but filtered so that only the object whose "horns" property matched our horns state vairable 
   // the || horns === "" means that you will get ALL the beasts when none of the options are selected because it will return true for ever single item in the array 
   const filteredHorns = data.filter(
    (beast) => beast.horns == horns || horns == ""
   );

    return (
        <div>
            {filteredHorns.map((beast) => {
                return (
                    <HornedBeast 
                        key={beast._id}
                        title={beast.title}
                        image_url={beast.image_url} 
                        description={beast.description} 
                        handleShowModal={handleShowModal}
                    />
                );
            })}
         </div>
    );
}