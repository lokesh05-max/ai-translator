import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { text, sourceLang, targetLang } = await request.json();

    // In a production environment, you would call a translation API here
    // For example: Google Cloud Translation, DeepL, or another translation service
    // For now, we'll just return a mock response
    
    // Mock translations for demonstration
    // In a real app, replace this with an actual API call
    const translations: Record<string, Record<string, string>> = {
      en: {
        hi: 'नमस्ते, यह अंग्रेजी से हिंदी में अनुवादित एक उदाहरण पाठ है।',
        kn: 'ನಮಸ್ಕಾರ, ಇದು ಇಂಗ್ಲಿಷ್ನಿಂದ ಕನ್ನಡಕ್ಕೆ ಭಾಷಾಂತರಿಸಲಾದ ಉದಾಹರಣೆ ಪಠ್ಯವಾಗಿದೆ.',
        ml: 'ഹലോ, ഇത് ഇംഗ്ലീഷിൽ നിന്ന് മലയാളത്തിലേക്ക് വിവർത്തനം ചെയ്ത ഒരു ഉദാഹരണ വാചകമാണ്.',
        ta: 'வணக்கம், இது ஆங்கிலத்தில் இருந்து தமிழுக்கு மொழிபெயர்க்கப்பட்ட ஒரு மாதிரி உரையாகும்.',
        es: 'Hola, este es un texto de ejemplo traducido al español.',
        fr: 'Bonjour, ceci est un exemple de texte traduit en français.',
        de: 'Hallo, dies ist ein Beispieltext, der ins Deutsche übersetzt wurde.',
        it: 'Ciao, questo è un testo di esempio tradotto in italiano.'
      },
      hi: {
        en: 'Hello, this is a sample text translated from Hindi to English.',
        kn: 'ನಮಸ್ಕಾರ, ಇದು ಹಿಂದಿಯಿಂದ ಕನ್ನಡಕ್ಕೆ ಭಾಷಾಂತರಿಸಲಾದ ಪಠ್ಯದ ಉದಾಹರಣೆಯಾಗಿದೆ.',
        ml: 'ഹലോ, ഹിന്ദിയിൽ നിന്ന് മലയാളത്തിലേക്ക് വിവർത്തനം ചെയ്ത ഒരു ഉദാഹരണ വാചകമാണിത്.',
        ta: 'வணக்கம், இது இந்தியில் இருந்து தமிழுக்கு மொழிபெயர்க்கப்பட்ட ஒரு மாதிரி உரையாகும்.'
      },
      kn: {
        en: 'Hello, this is a sample text translated from Kannada to English.',
        hi: 'नमस्ते, यह कन्नड़ से हिंदी में अनूदित एक नमूना पाठ है।',
        ml: 'ഹലോ, ഇത് കന്നഡയിൽ നിന്ന് മലയാളത്തിലേക്ക് വിവർത്തനം ചെയ്ത ഒരു ഉദാഹരണ വാചകമാണ്.',
        ta: 'வணக்கம், இது கன்னடத்தில் இருந்து தமிழுக்கு மொழிபெயர்க்கப்பட்ட ஒரு மாதிரி உரையாகும்.'
      },
      ml: {
        en: 'Hello, this is a sample text translated from Malayalam to English.',
        hi: 'नमस्ते, यह मलयालम से हिंदी में अनूदित एक नमूना पाठ है।',
        kn: 'ನಮಸ್ಕಾರ, ಇದು മലയಾಳದಿಂದ ಕನ್ನಡಕ್ಕೆ ಭಾಷಾಂತರಿಸಲಾದ ಪಠ್ಯದ ಉದಾಹರಣೆಯಾಗಿದೆ.',
        ta: 'வணக்கம், இது மலையாளத்தில் இருந்து தமிழுக்கு மொழிபெயர்க்கப்பட்ட ஒரு மாதிரி உரையாகும்.'
      },
      ta: {
        en: 'Hello, this is a sample text translated from Tamil to English.',
        hi: 'नमस्ते, यह तमिल से हिंदी में अनूदित एक नमूना पाठ है।',
        kn: 'ನಮಸ್ಕಾರ, ಇದು ತಮಿಳಿನಿಂದ ಕನ್ನಡಕ್ಕೆ ಭಾಷಾಂತರಿಸಲಾದ ಪಠ್ಯದ ಉದಾಹರಣೆಯಾಗಿದೆ.',
        ml: 'ഹലോ, ഇത് തമിഴിൽ നിന്ന് മലയാളത്തിലേക്ക് വിവർത്തനം ചെയ്ത ഒരു ഉദാഹരണ വാചകമാണ്.'
      },
      // Other language mappings...
      es: {
        en: 'Hello, this is an example text translated to English.',
        hi: 'हैलो, यह स्पेनिश से हिंदी में अनुवादित एक उदाहरण पाठ है।',
        kn: 'ಹಲೋ, ಇದು ಸ್ಪ್ಯಾನಿಷ್ ನಿಂದ ಕನ್ನಡಕ್ಕೆ ಭಾಷಾಂತರಿಸಲಾದ ಉದಾಹರಣೆ ಪಠ್ಯವಾಗಿದೆ.',
        ml: 'ഹലോ, ഇത് സ്പാനിഷിൽ നിന്ന് മലയാളത്തിലേക്ക് വിവർത്തനം ചെയ്ത ഒരു ഉദാഹരണ വാചകമാണ്.',
        ta: 'வணக்கம், இது ஸ்பானிஷ் மொழியில் இருந்து தமிழுக்கு மொழிபெயர்க்கப்பட்ட ஒரு மாதிரி உரையாகும்.'
      }
    };

    // If we have a direct translation, use it
    if (translations[sourceLang]?.[targetLang]) {
      return NextResponse.json({
        translatedText: translations[sourceLang][targetLang]
      });
    }

    // Fallback: Just return the original text
    return NextResponse.json({
      translatedText: text
    });

  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Failed to process translation' },
      { status: 500 }
    );
  }
}
