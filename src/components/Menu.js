import Swal from 'sweetalert2';
import recipes from '../recipes';

export function Menu(){

    const handleClick = (id) => {
        Swal.fire({
            title: "Are you sure you want to order this dish?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                title: "Ordered satisfactorily!",
                text: "Your dish has been ordered!",
                icon: "success"
                });
            }
        });
    }
    return(
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks specials</h2>
                <button>Order Menu</button>
            </div>

            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt='Image' />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>$ {recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderbtn' onClick={ () => handleClick(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}