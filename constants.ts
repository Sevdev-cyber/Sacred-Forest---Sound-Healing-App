import { Instrument } from './types';

export const BACKGROUND_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCdlXs9DtWucOTlNUkHGW89zesay_TBlGMepczYhKHQrXIv5T7S1l3_v97xbitEBTxcuSeDD1zy3TlijDPnSBHBgKhiDC0JbxukpJ9dnLdLyk2g2VRNQ91TMC5fF0AuvUfNIIhjlCYJf1qS8ZLornH08731-h7QBmeHP3PprAEWaAztbqQspdKfm8qu8zq_pFMBvoH5nIkVSZDRLuvw51XYEnuo9D8XBSZUPX7_sVPN_t6I4-oJJF6btAwyW4gN0Ka2L6RxlAHo-Hc";
export const BACKGROUND_MIST = "https://lh3.googleusercontent.com/aida-public/AB6AXuAc9xkg_CceCNyx-1KZ_7WqbrF9II4N2i8pmyukEk1s7y1iJy2I7YqPW4rIvAJCN6qV1oRnw-eI9Jui9ZaXU6KFRfKDF9ei4bQmQh7LTF11qBUMWZl7Mv_pdAd3oGiBedcT1dCm3tJk7mu5QyjBkvAHnwH1Z53rUVPZky-Cfo1rQMZIY0GgbIIx5OkmKN457Ef2ra7-611cFWTgxIHxGkUiLPP4OzH_Gl439i_U8GKJPj2uA1C5aqByYUeoChB907mhqd58pSxmhl4";

export const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuAvf9AJw196lLOI6m_kKqT6shKbHGa8mjlGMKhFf4w69h-PnYln1OWO8f-ry_g4fxhCHfWqmsYsb9F7bRHMWM9dk2jjB8RZkV0X-vnVlIEuUPLeMRNTAtlum6R7fFPa_8NxEgX1SDyNqhusGEQk5R1YpiqdF30gCGzgxQxLzTrq1UW_IADX8ZVt4bT7RUcGqey4iiVLte08So3fLzqiWBb-eQxUn_31YYz5M3U7gDjJZ-kdwQ6hhqOsJh3vW9zZgYwk_Iifs0nS1vQ";

export const INSTRUMENTS: Instrument[] = [
  {
    id: '1',
    name: 'Crystal Harp',
    description: 'Vibrations of Clarity',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATzf72xIQmjfujDbat9OaHL7--xvnoIwz6fyUJ0cwDtlPv6ATolauUJaTOCO-5ZvgVoK_-R0mwqS7zcyx1SGKJDfGXTdKzqN0QvsZ2e7Cn7rzGhdLC97yCHFSsH62KzLXV-vTgrgdf8IKwLGuoX0Dftd1dOnHZNZLL83KKVyI2-LILBr0TfbeW6Hn1qh2Uojme7dt6m9DyQmxpBfkOHU5o8FR_1Ttq7HbOZ7NxYN2R7zshnOMZH_OHO60feLNONRaMThtpAfza2FM',
    type: 'Percussion',
  },
  {
    id: '2',
    name: 'Ancient Bowls',
    description: 'Grounding Earth Resonance',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_0y6xuXnsUra_2OjO2nE3Xybm0Uc5sys8It9mqXbohQqVvYEfyRucVo8Sng1kuTRf5OigJjyhqY0VxtiCNLT9afiWTWEONQK81ApnBL-oKK-bssA-4OgB0JgIgLZUnoctNUoVHdSRcRsdjyL6IlDWDTpeN3O3Mdz_ud1mlTXp7OONQPMtGP3z8yL2n2Cwti8U4ZA8OKBYSc71uRsZ3oOf5jzktooc2ZLeKD8Qvai2_tW-_ogfkL00WXSEJG6Z9ILJ063RFEVAzOc',
    type: 'Percussion',
    price: '$2.99',
  },
  {
    id: '3',
    name: 'Spirit Flute',
    description: 'Breath of the Ancestors',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2RI9I4lq7U04QTPi3kR8Z8_7XP_lq9timBmQtu7feIMG5z9a0HuiKy4rX59c_ZhvnK0uYYo61QRhTO2jBW3EW7NsW9fz-Kqeae0zMpCzjGgVCK18ZLVxjJynRlBwSaEAGqG48ttkEPkG-wl5Zmn3omICx5QdgrClRTlDspLhy3PHkgOq5ahs-ciq-CNBU4Xs42WQo0_x4d27Tzu0DnAF6YrsNpJgZ6nXPzUOSFZsIFVYIQKukR2gNT43CszrLtZUsmPAfHw52DwM',
    type: 'Wind',
    isPremium: true,
  },
  {
    id: '4',
    name: 'Wind Chimes',
    description: 'Whispers of the Breeze',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr1ZREpdhTFR0_jJDUYCbjxwXbg7wYHyRwb4qtjBAoEYuBq7lA-1DoBuIMCKatxM3KczRVLiOxuBlghxFOnHr90SkAm6508W6XyjI6F2fRmuIqtRjslLtpQ6dxH4GtKULzqJvO2YgH9LsBk4XMg-5M-DDCr8cYlrdz2d1agMu42XuzHuqR1Qj_BAZSOrep8M2qs8JO-DlNznNqu8LX006mSMnzDiScGgFoN_IRsJtyVP2qfNoQrwTT0rvl_8qMbjFcB9WZjsuZGnk',
    type: 'Percussion',
    isPremium: true,
  },
];

export const ALL_TOOLS: Instrument[] = [
  ...INSTRUMENTS,
  {
    id: '5',
    name: 'Crystal Bowl',
    description: 'Heart Chakra • F#',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzHWHFHTOs_eogmrG85bw-wVPzafG8ZEjcdCuLZq9G6t10UlqWZuuqmMNs1J9H8LGjr8G-_byy13YtqWdDAQSXe3U1uBvak_LSNWs47qGzHkbHa3c4-zd5vpdmCNNevIdmt_SUcp3gcs3fAjSeBIJHYB7v9zCwyERArUVlOwjXAyum1JsYJmUzX2qgm0tw6RfFghR-2FHtwq8tPS6e-zzXCqnsin1WHvZhKqHO50iqAOIKj4LWAe3SCgHB9kfm3YGWRkbGbhMqJps',
    type: 'Percussion',
    chakra: 'HEAL'
  },
  {
    id: '6',
    name: 'Bamboo Flute',
    description: 'Forest Whisper',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBako8EcgDzf-zaNDx5D4EmukveYVwSbqP2P2IPaJVMN-bXHM9OSyvLGhRGLtHyFT4veFkGQ6s6khgoBgCoKIgaCHaJ_soluA6Ml-T_tCfmFM7lMRPF3nNdABBc84bb4e9FwMbuwI7Z8a69rZcexmmfGTLNH1paugdrIT84tzY6sJCdHZ1rgf-f26Au4SJzzBBWMhX9vUOs5VNkl6eMkwq-EcuJLIbJeSZGtEFa_NKcqqeSXIUuNzVAHwlrHfZwfzkzImdrX7L6FCs',
    type: 'Wind',
  },
  {
    id: '7',
    name: 'Koshi Chime',
    description: 'Ignis Element',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClXQrrHVTb_mk9WTwNPs2RE8G2uP0mCHLrJxcbDwIqHIV_NDrEQTs3T9lSv9fn_oQH1BYwh8PHD1-h1V1SEuLydo5Mx2sinzjge7cu79HzzGbQOABG0BDyFIOrLfZGZGN1GAewl4443HlAm-SdOA__zOUouBAY42X_FmVh9wRzmEBI70epixhgyqDRilG7VJD-JcxbJU9KQWPnbpB32hbkPkknEmS5UcGDaEwNvHxSmzufxwc8R81c6K-mbIA_Otrc07atqMufDuQ',
    type: 'Percussion',
    element: 'AIR'
  },
  {
    id: '8',
    name: 'Ocean Drum',
    description: '528Hz Frequency',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvXkf3ecyr6Wt4G5fREXb3PBzH0910uirOkwvEw4TrsA5sjXdlXito5PnMQAN-0sZmnLOrpCfS64ReKJpuoYYQsHCCCEzkkoMDtHywHd9tOBhCfFkBWXXj5zaUBZFI9yPihKRLkyeAgquNlA4rpdcbKk-m6KMTT42RGKYXSpFJrdn21_ZcqxboVxU0hdySiCBnP-ykLpj7vSOCQhwDfpgEfjINhNvuy6ncpioohMDt4IkNP8jcNSdqL8pfqJs_BUpJNV6d-ZMmpzo',
    type: 'Percussion',
  },
   {
    id: '9',
    name: 'Bronze Gong',
    description: 'Deep Resonance',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1GfDUHDp0WUGGi0-YSjyi39U8wvUCnRXzn3HBZjV3q2UHiC2tEjAlA-FJrBzFnSdbLHV9iokPunaLjZSt637F2esk3H-KaOzq0lBYqACUmxDIf4CxVL4XApJJ-mNkV8o-lCMriIEyWRehH4sdvRFzR2Mv9hiZBKnpwUzFYrugrMkrSbBoQufZAjfMDcXcwkdWFSU9QJsa5Tfm6TJb9UUEs0cbz7zzY7lTknN2xRvONNk7xc1FHtdv5tXkvErrmc2LpFxY2d1r8zk',
    type: 'Percussion',
  },
]
