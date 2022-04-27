
import logo from '../../Assets/logo.png'
import { CartComponent } from './CartComponent'
import { UserComponent } from './UserComponent'

export const DailyStoreHeader =()=>{
    return <div className="headerContainer">
        <img src={logo} className='logoImg' />
        <div className='rightQuick'>
            <div className='userHolder'>
            <UserComponent/> 
            </div>
         <div className='cartHolder' >
             <CartComponent/>
         </div>
        </div>
      
    </div>
}