import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { MdOutlineAssignmentReturn } from 'react-icons/md'

const Orders = () => {
    const [orders,setOrders] = React.useState()
    const [acceptedOrder,setAcceptedOrder] = React.useState()
    const {isLoading,user,isAuthenticated} = useAuth0()
    

    //make a call to the backend to fetch all orders at localhost:3002/orders after every 2 minutes
    
    React.useEffect(() => {
        // make a call to the backend every 2 minuts to fetch all orders
        // fetch('http://localhost:3002/create')
        // .then(res => res.json())
        // .then(data => console.log("Hello"))
              
        //  setInterval(() => {
            fetch('http://localhost:3002/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log('DATA: ',data)
                console.log('Orders: ',orders)
            })
        // }, 220000);
        
        // return () => clearInterval(interval);
    }, [])
    //useeffect hook to print orders

    React.useEffect(() => {
        console.table('Useeffect Orders: ',orders)
    }, [orders])

    if(isLoading)
    {
        //import and use matrial ui spinning animation
        return (<div>Loading...</div>)

    }

    const acceptOrder = (id) => {
        //make a call to the backend to accept the order with patch type
        console.log("ID: ",id)
        fetch(`http://localhost:3002/updateOrder/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 'accepted'
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log('Changed status order: ',data)
        
        })

        setAcceptedOrder(id)

    }


    // render all the orders
    return (
   
        <div>
            
            <div className='w-full flex items-center justify-center mt-7 '>

            <h1 className='bg-gray-200 text-2xl font-bold text-center  rounded p-4 w-40'>Orders</h1>
            </div>
            <div className='grid grid-cols-4 w-full h-auto gap-10 p-14'>

                {orders && orders.map(order => {

                    if(order.status === false)
                    {
                        return (
                            <div key={order._id} className="w-full rounded-md h-auto  px-3 py-5 flex flex-col border shadow-md">
                            <div className='p-1  bg-gray-200 text-gray-400 rounded-md font-normal'>{order._id}</div>
                            <div className='text-slate-600 font-semibold  text-xl bg-rose-100 w-auto p-1 my-2 rounded'>{order.product.name}</div>
                            <div className='p-1  bg-gray-200 text-gray-400 rounded-md font-normal my-1'>{order.quantity}</div>
                            <div className='p-1  bg-gray-200 text-gray-400 rounded-md font-normal my-1'>{order.address}</div>
                            <div className='ml-auto'>
                                <button className='bg-green-500 text-white rounded-md px-3 py-1' onClick={() => acceptOrder(order._id)}>Accept</button>
                            </div>
                        </div>
                        )
                    }
                }
                    
                
                )}

            </div>
        </div>
    )
}

export default Orders