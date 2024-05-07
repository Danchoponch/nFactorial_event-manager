import './Overlay.css';
import { CloseOutlined } from '@ant-design/icons';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';


function Overlay({isOpen, onClose, event}){
    if(isOpen && event){

        let date = event.timing.slice(0, event.timing.indexOf('T'));
        let time = event.timing.slice(event.timing.indexOf('T')+1);

        let dateArr = date.split('-');

        return(
            <div className='overlay'>
                <div className='overlay-background' onClick={onClose}/>
                <div className='overlay-container'>
                    <div className='overlay-controls'>
                        <button className='overlay-close' type='button' onClick={onClose}><CloseOutlined /></button>
                    </div>
                    <div className='overlay-content'>
                        <h3>{event.name}</h3>
                        <p>Place: {event.place}</p>
                        {/* <p>Time: {event.timing}</p> */}
                        <p>Time: {time.slice(0,5)}</p>
                        <p>Date: {dateArr[2] + '.' + dateArr[1] + '.' + dateArr[0]}</p>
                        <p>Description: {event.description}</p>
                        <p>Available Spots: {event.availableSpots}/{event.totalSpots}</p>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(null);
    }
}

export{Overlay};