import { Route, Routes } from 'react-router-dom'
import { useReducer } from 'react'
import { Header } from './Header'
import { Menu } from './Menu'
import { Testimonials } from './Testimonials'
import { BookingTable } from './BookingTable'

export function Main() {

    const seedRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return (s = s * a % m) / m;
        }
    }

    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for(let i = 17; i <= 23; i++){
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if(random() > 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    }

    const submitAPI = function(formData){
        return true;
    }

    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(){
        return {availableTimes: fetchAPI(new Date())}
    }

    return (
        <main>
            <Routes>
                <Route path='/' element={
                    <>
                        <Header/>
                        <Menu />
                        <Testimonials />
                    </>
                } />
                <Route path='/booking' element={ <BookingTable availableTimes={state} dispatch={dispatch} /> } />
            </Routes>
        </main>
    )
}