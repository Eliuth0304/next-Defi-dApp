
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useWeb3 } from '../../context/Web3Provider'
import {MdDarkMode}  from "react-icons/md"
import {MdLightMode}  from "react-icons/md"
import {SiFoodpanda} from "react-icons/si"
import Image from 'next/image'
export default function Header(props) {
    const {theme, setTheme} = useTheme()
    const wallet = useWeb3()
    const styles = {
        mainContainer: 'smd:px-48 sm:px-24 w-full sticky top-0 py-2   flex items-center justify-between',
        logo: 'h-12 w-12',
        title: 'font-bold text-2xl' ,
        button: 'dark:bg-l font-bold  bg-d text-l dark:text-d rounded-md px-8 py-4',
        div: 'mx-4 space-x-4 font-semibold ',
        themeIcon: 'h-8 w-8 cursor-pointer'
    }
    const switchTheme =()=>{
        setTheme(theme==='dark'?'light':'dark')
    }

  return (
    <div className={styles.mainContainer}>
            <Link  href='/'>
                <div className={styles.div + 'flex items-center cursor-pointer'}>
                    <svg  
                    version="1.0" xmlns="http://www.w3.org/2000/svg"  
                    width="150.000000pt" height="40.000000pt" 
                    viewBox="0 0 300.000000 80.000000"  preserveAspectRatio="xMidYMid meet"> 
                         <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" className='fill-d dark:fill-l' stroke="none">
                             <path d="M330 641 c-52 -17 -89 -42 -127 -85 -110 -125 -73 -296 82 -379 60 -32 202 -31 265 1 119 62 170 168 136 283 -33 113 -125 180 -256 185 -41 2 -86 0 -100 -5z m214 -31 c144 -68 153 -235 19 -320 -98 -62 -212 -66 -320 -11 -35 17 -63 35 -63 40 0 5 27 -4 59 -21 50 -26 70 -30 134 -30 141 0 236 68 244 175 5 70 -20 110 -90 142 -120 56 -268 9 -294 -93 -14 -57 65 -132 140 -132 36 0 96 26 113 48 37 48 -9 108 -78 103 -10 0 -18 -5 -18 -11 0 -5 7 -7 15 -3 20 7 55 -24 55 -48 0 -49 -103 -67 -145 -24 -61 60 -4 135 102 135 78 0 143 -55 143 -121 0 -50 -104 -119 -181 -119 -50 0 -118 31 -154 71 -29 32 -35 47 -35 84 0 66 58 126 150 156 42 14 153 2 204 -21z"/> <path d="M797 614 c-4 -4 -7 -104 -7 -222 0 -166 3 -213 13 -210 9 4 13 57 15 213 2 191 -2 237 -21 219z"/> <path d="M1650 400 l0 -180 29 0 c16 0 31 5 33 11 3 9 9 9 25 0 35 -18 124 -14 160 9 93 56 81 186 -21 225 -46 18 -129 15 -141 -6 -16 -24 -25 -3 -25 56 l0 65 -30 0 -30 0 0 -180z m228 -6 c66 -75 -41 -159 -138 -109 -26 14 -30 21 -30 59 0 47 11 62 57 76 42 13 85 3 111 -26z"/> <path d="M2400 400 l0 -180 30 0 30 0 0 180 0 180 -30 0 -30 0 0 -180z"/>
                             <path d="M910 348 l0 -128 30 0 30 0 0 91 0 90 36 15 c45 19 87 10 114 -23 16 -20 20 -41 20 -99 l0 -74 30 0 30 0 0 75 c0 86 -17 136 -54 160 -37 25 -96 30 -139 12 -20 -9 -37 -12 -37 -8 0 5 -13 11 -30 13 l-30 5 0 -129z"/> <path d="M1355 466 c-108 -50 -113 -182 -8 -228 37 -16 61 -20 120 -16 40 3 76 8 79 11 3 3 3 14 0 24 -5 17 -16 19 -85 18 -64 0 -83 4 -100 19 -12 11 -21 22 -21 27 0 4 54 5 120 2 l120 -6 0 29 c0 35 -30 87 -64 109 -34 23 -124 29 -161 11z m114 -47 c17 -6 36 -20 42 -30 9 -18 5 -19 -81 -19 -100 0 -112 10 -49 42 40 21 46 21 88 7z"/> <path d="M2027 473 c-10 -9 -8 -121 3 -167 13 -59 39 -79 108 -84 36 -3 68 1 83 8 17 10 24 10 27 1 2 -6 17 -11 33 -11 l29 0 0 130 0 130 -30 0 -30 0 0 -89 c0 -100 -5 -110 -69 -118 -28 -4 -48 -1 -66 11 -24 16 -25 21 -25 106 l0 90 -28 0 c-16 0 -32 -3 -35 -7z"/> <path d="M2594 469 c-35 -8 -41 -13 -37 -30 8 -28 17 -31 68 -18 54 14 119 0 134 -30 9 -16 3 -17 -85 -17 -93 1 -96 0 -120 -27 -32 -37 -30 -62 6 -99 29 -28 33 -29 98 -25 37 2 78 8 91 12 17 6 22 5 17 -3 -5 -8 4 -12 30 -12 l37 0 -6 84 c-3 47 -13 99 -22 116 -28 54 -107 72 -211 49z m166 -149 c17 -10 16 -12 -27 -34 -32 -16 -88 -21 -117 -10 -16 6 -22 35 -9 47 10 10 136 8 153 -3z"/> 
                        </g> 
                    </svg> 
                </div>
            </Link>
        {wallet.provider && (
            <div className={styles.div + 'hidden md:flex'}>
                <Link href='/'>
                Swap
                </Link>
                <Link href='/lending'>
                Lending
                </Link>
                <Link href='/stableswap'>
                Stableswap
                </Link>
                <Link href='/mint'>
                Mint
                </Link>
            </div>
        )}
        <div className={styles.div + 'flex items-center'}>
            {theme=='light'
            ? <MdDarkMode  className={styles.themeIcon} onClick={switchTheme}/>
            : <MdLightMode className={styles.themeIcon}  onClick={switchTheme}/>
            }
            {!wallet.provider 
            ? <button className={styles.button} onClick={wallet.connect}>Connect</button>
            : <button className={styles.button} onClick={wallet.forget}>{wallet.address.slice(0,15)}...</button>
            }
        </div>
    </div>
  )
}

