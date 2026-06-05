import React from 'react' 
import Home from './components/Home'
import Product from './components/Product'
import Checkout from './components/Checkout'
import Category from './components/Category'
import Singleproduct from './components/SingleProduct'
import Scrolltotop from './components/Scrolltotop'
import {Link, Routes, Route} from 'react-router-dom'
import CartProvider from './components/Cartcontext'
import originsIcon from './assets/origins.ico'
import { SignIn, SignUp, SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'

export default function App({ hasClerk = true }) {
  function openMenu(){
    document.getElementById('close').style.display = "block";
    document.getElementById('open').style.display = "none";
    document.getElementById('mobile-nav-link-container').style.display = "block";
    
  }
  function closeMenu(){
    document.getElementById('close').style.display = "none";
    document.getElementById('open').style.display = "block";
    document.getElementById('mobile-nav-link-container').style.display = "none";
  }
  return (
    <CartProvider>
    <div className='app-container'>
      <div className='navigation-container'>
        <nav className='brand-name-con'>
          <img style={{width: "30px", height: "50px", objectFit: "cover"}} src={originsIcon} alt="" />
          <p className='brand-name'>rigins</p>
          <nav className='desktop-nav'>
            <Link className='navigation' to='/'>Home</Link>
            <Link className='navigation' to='/product'>Product</Link>
            <Link className='navigation' to='/category'>Category</Link>
            <Link className='navigation' to='/checkout'>Checkout</Link>
            
          </nav>
        </nav>
        
        <nav className='auth-nav'>
          <Link style={{marginRight: "10px"}} className='navigation' to='/checkout'><i className="fa-solid fa-cart-arrow-down"></i></Link>
          {hasClerk ? (
            <>
              <SignedOut>
                <Link style={{border: "1px solid black", padding: "5px 10px", borderRadius: "5px", backgroundColor: "#242323", color: "white", fontSize: "15px"}} className='auth-navigation' to='/login'>Login</Link>
              </SignedOut>
              <SignedIn>
                <SignOutButton className='sign-out-button' />
              </SignedIn>
              <Link style={{border: "1px solid black", padding: "5px 10px", borderRadius: "5px", backgroundColor: "#242323", color: "white", fontSize: "15px"}} className='auth-navigation' to='/signup'>Sign up</Link>
            </>
          ) : (
            <>
              <Link style={{border: "1px solid black", padding: "5px 10px", borderRadius: "5px", backgroundColor: "#242323", color: "white", fontSize: "15px"}} className='auth-navigation' to='/login'>Login</Link>
              <Link style={{border: "1px solid black", padding: "5px 10px", borderRadius: "5px", backgroundColor: "#242323", color: "white", fontSize: "15px"}} className='auth-navigation' to='/signup'>Sign up</Link>
            </>
          )}
        </nav>
        
        <nav className='mobile-nav'>
          <span className='mobile-cart-con'>
            {hasClerk ? (
              <>
                <SignedOut>
                  <Link style={{border: "1px solid black", padding: "5px 10px", borderRadius: "5px", backgroundColor: "#242323", color: "white", fontSize: "15px"}} className='auth-navigation' to='/login'>Login</Link>
                </SignedOut>
                <SignedIn>
                  <SignOutButton className='sign-out-button' />
                </SignedIn>
              </>
            ) : (
              <>
                <Link style={{border: "1px solid black", padding: "5px 10px", borderRadius: "5px", backgroundColor: "#242323", color: "white", fontSize: "15px"}} className='auth-navigation' to='/login'>Login</Link>
              </>
            )}
          </span>
          <div className='mobile-nav-bars' style={{display: "inline-block", marginLeft: "10px", marginTop: "5px"}}>
            <i id='open' className="fa-solid fa-bars" onClick={openMenu}></i>
            <i id='close' className="fa-solid fa-x" style={{display: "none"}} onClick={closeMenu}></i>
          </div>

            <div id='mobile-nav-link-container' className="mobile-nav-links" style={{display: 'none'}}>
                <Link className='navigation' to='/'>
                  <div className='mobile-nav-div'>Home</div>
                </Link>
                <Link className='navigation' to='/product'>
                  <div className='mobile-nav-div'>Product</div>
                </Link>
                <Link className='navigation' to='/category'>
                  <div className='mobile-nav-div'>Category</div>
                </Link>
                <Link className='navigation' to='/checkout'>
                  <div className='mobile-nav-div'>Checkout</div>
                </Link>
            </div>
            
        </nav>
      </div>
      <Scrolltotop/>
      <Routes>
        <Route path='/login' element={<div className='auth-page'>{hasClerk ? <SignIn/> : <div className='auth-page'>Authentication not configured</div>}</div>}/>
        <Route path='/signup' element={<div className='auth-page'>{hasClerk ? <SignUp/> : <div className='auth-page'>Authentication not configured</div>}</div>}/>

        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/singleproduct/:id' element={<Singleproduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/category/:category' element={<div className='category-page'><Category/></div>}/>
        <Route path='/category' element={<div className='category-page'><Category/></div>}/>
      </Routes>
    </div>
    </CartProvider>
  )
}
