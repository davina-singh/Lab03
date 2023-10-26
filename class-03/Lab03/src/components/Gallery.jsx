import HornedBeast from "./HornedBeast";

export default function Gallery({data, handleShowModal}) {
   
    return (
        <div>
            {data.map((beast) => {
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