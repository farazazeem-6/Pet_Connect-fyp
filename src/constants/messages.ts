export const messages = {
  email: {
    success: "🎉 You're subscribed!",
    already_subscribed: 'This email is already subscribed.',
    error: 'Something went wrong. Please try again.',
  },
  validation: {
    emailRequired: 'Email is required',
    emailInvalid: 'Enter a valid email address',
    passwordRequired: 'Password is required',
    passwordMin: 'Password must be at least 6 characters',
    nameRequired: 'Full name is required',
    nameInvalid: 'Enter a valid full name (letters, spaces, hyphens, apostrophes only)',
    confirmRequired: 'Please confirm your password',
    passwordMismatch: 'Passwords do not match',
  },

  auth: {
    welcomeBack: 'Welcome Back!',
    signUp: 'Sign Up',
    signIn: 'Sign In',
    createAccount: 'Create Account',
    signingIn: 'Signing in…',
    creatingAccount: 'Creating account…',
    forgotPassword: 'Forgot Password?',
    resetPasswordTitle: 'Reset Password',
    resetPasswordSubtitle: "Enter your email and we'll send you a reset link.",
    sendLink: 'Send Reset Link',
    sendingLink: 'Sending Link…',
    resetPasswordSent: 'Password reset email sent! Check your inbox.',
  },
  errors: {
    userNotFound: 'No account found with this email.',
    invalidCredentials: 'Incorrect email or password. Please try again.',
    emailInUse: 'This email is already registered. Sign in instead.',
    tooManyRequests: 'Too many attempts. Please wait a moment and try again.',
    network: 'Network error. Check your connection and retry.',
    googleCancelled: 'Google sign-in was cancelled.',
    reportLogin: 'You must be logged in to report an animal.',
  },
  browsePets: {
    title: 'Browse Pets',
    subtitle: 'Find your perfect companion',
    filterButton: 'Filters',
    emptyTitle: 'No pets listed yet — add yours!',
    emptySubtitle: 'Help animals find loving homes by listing your pet for adoption. It only takes a few minutes.',
    ctaButton: 'Add Your Pet',
  },
  lostFound: {
    title: 'Lost & Found',
    subtitle: 'Reunite pets with their families',
    filterButton: 'Filters',
    emptyTitle: 'No reports yet — be the first!',
    emptySubtitle: 'Lost your pet or found a stray? Click here to submit a report and help connect animals with their families.',
    ctaButton: '+ Report an Animal',
    foundReportButton: 'Found / Report an Animal',
    reportFound: 'Found / Report',
    tabs: {
      all: 'All',
      lost: 'Lost',
      found: 'Found',
    }
  },
  website: {
    aboutUs: {
      heading: 'About Pet Connect',
      subHeading: 'Pet Connect is a community‑driven platform dedicated to reuniting pets with loving families.',
      missionTitle: 'Our Mission',
      missionText:
        'We aim to create a trusted and compassionate ecosystem where every pet has the opportunity to find a safe, loving, and permanent forever home. By combining real-time data, intelligent personalized matchmaking, and seamless communication between donors, rescuers, shelters, and adopters, we make the adoption process more transparent, efficient, and reliable for everyone involved.Our platform is designed to help users make informed decisions by providing accurate pet information, adoption insights, and direct connections with responsible adopters and caregivers.Beyond simply rehoming pets, we strive to build a supportive community that promotes responsible pet ownership, animal welfare awareness, and long- term care for rescued animals.',
      storyTitle: 'Our Story',
      storyText:
        'What began as a small social media page dedicated to rescuing, rehabilitating, and rehoming pets has grown into a thriving community driven by compassion, trust, and a shared love for animals. What started with a simple mission — giving abandoned and vulnerable pets a second chance at life — has now become a platform where countless animals have found safety, care, and their forever homes. Over the years, we’ve connected loving families with pets in need, supported rescue efforts, raised awareness about animal welfare, and built a community of people who truly believe every pet deserves love, care, and a place to belong. Every rescue story, every successful adoption, and every happy tail wag has been part of this incredible journey.',
      valuesTitle: 'Our Core Values',
      values: [
        {
          title: 'Compassion First',
          description:
            'Every decision we make is guided by the well-being and happiness of the animals we serve. We champion humane treatment, proper care, and advocate for pets who cannot speak for themselves.',
        },
        {
          title: 'Transparency & Trust',
          description:
            'We provide verified listings, open communication channels, and clear processes so adopters and pet owners can collaborate with complete confidence and peace of mind.',
        },
        {
          title: 'Community Action',
          description:
            'We believe in the power of collective effort. By bringing together rescuers, and loving families, we create a strong safety net for animals.',
        },
        {
          title: 'Innovation in Welfare',
          description:
            'We utilize modern technology, smart search filters, and seamless state-management to make the journey of finding, adopting, and caring for a pet as simple and friction-free as possible.',
        },
      ],
      howItWorksTitle: 'How Pet Connect Works',
      howItWorksSteps: [
        {
          step: '01',
          title: 'Browse Listings',
          description:
            'Explore verified listings of pets available for adoption, lost & found reports, and community alerts in your neighborhood.',
        },
        {
          step: '02',
          title: 'Connect Instantly',
          description: 'Communicate directly with pet owners, shelters, or guardians using their contact number.',
        },
        {
          step: '03',
          title: 'Complete Adoption',
          description: 'Follow clear guided steps to finalize the process safely and bring your new family member home.',
        },
      ],
      teamTitle: 'Meet the Team',
      teamMembers: [
        {
          name: 'Faraz Azeem',
          role: 'Developer & Founder',
          avatar: 'https://ui-avatars.com/api/?name=Faraz+Azeem&background=0D9488&color=fff&bold=true',
        },
        {
          name: 'Umer Zahid',
          role: 'QA Engineer',
          avatar: 'https://ui-avatars.com/api/?name=Umer+Zahid&background=0D9488&color=fff&bold=true',
        },
        {
          name: 'Hassan Bilal',
          role: 'UI/UX Designer',
          avatar: 'https://ui-avatars.com/api/?name=Hassan+Bilal&background=0D9488&color=fff&bold=true',
        },
      ],
    },
    termsAndConditions: {
      heading: 'Terms & Conditions',
      subHeading: 'Last Updated: 26 May 2026',
      intro:
        'Welcome to Pet Connect. These Terms and Conditions govern your access to and use of our website, mobile experience, and related services. By creating an account, browsing listings, or using any part of the platform, you agree to be bound by these terms. Please read them carefully before using Pet Connect.',
      sections: [
        {
          id: 'acceptance',
          title: '1. Acceptance of Terms',
          paragraphs: [
            'By accessing or using Pet Connect, you confirm that you are at least 18 years old or have the consent of a parent or legal guardian, and that you have the legal capacity to enter into a binding agreement.',
            'If you do not agree with any part of these terms, you must discontinue use of the platform immediately. Continued use after changes are posted constitutes acceptance of the revised terms.',
          ],
        },
        {
          id: 'platform-purpose',
          title: '2. Platform Purpose',
          paragraphs: [
            'Pet Connect is a community-driven platform that helps users browse pet adoption listings, report lost or found animals, connect with rescuers and adopters, and share information related to animal welfare.',
            'We provide tools to facilitate connections between users. Pet Connect is not a pet seller, breeder, shelter operator, or veterinary service provider unless explicitly stated otherwise.',
          ],
        },
        {
          id: 'user-accounts',
          title: '3. User Accounts & Responsibilities',
          paragraphs: [
            'You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us immediately if you suspect unauthorized access.',
            'You agree to provide accurate, current, and complete information when registering or creating listings, and to update your details when they change.',
          ],
          listItems: [
            'Use only one account per person unless authorized by Pet Connect.',
            'Do not impersonate another person, organization, or pet owner.',
            'Do not share your account credentials with others.',
            'Do not use automated tools to scrape, copy, or disrupt the platform.',
          ],
        },
        {
          id: 'listings-content',
          title: '4. Listings & User Content',
          paragraphs: [
            'When you post adoption listings, lost-and-found reports, images, descriptions, or other content, you represent that the information is truthful to the best of your knowledge and that you have the right to share it.',
            'You retain ownership of content you submit, but you grant Pet Connect a non-exclusive, worldwide, royalty-free license to display, store, and distribute that content for the purpose of operating and promoting the platform.',
          ],
          listItems: [
            'Do not post misleading, fraudulent, or duplicate listings.',
            'Do not upload content that is abusive, hateful, unlawful, or harmful to animals or people.',
            'Do not include personal contact details in public fields where prohibited by platform rules.',
            'Do not use copyrighted images or materials without permission.',
          ],
        },
        {
          id: 'adoption-transactions',
          title: '5. Adoption, Rehoming & Offline Interactions',
          paragraphs: [
            'Pet Connect helps users discover and connect with one another. Any adoption, purchase, transfer, meeting, or exchange of an animal happens directly between users and is not guaranteed or supervised by Pet Connect.',
            'You are solely responsible for verifying the health, temperament, ownership, and suitability of any pet or adopter before completing a transfer. We strongly recommend in-person meetings in safe public locations and, where appropriate, veterinary checks or documentation review.',
          ],
        },
        {
          id: 'prohibited-conduct',
          title: '6. Prohibited Conduct',
          paragraphs: [
            'You may not use Pet Connect in any way that violates applicable laws, harms animals, exploits users, or interferes with platform security or performance.',
          ],
          listItems: [
            'Animal trafficking, illegal breeding, or sale of protected species.',
            'Harassment, threats, spam, or solicitation unrelated to pet welfare.',
            'Attempting to bypass platform safeguards or access restricted data.',
            'Uploading malware, viruses, or harmful code.',
            'Misrepresenting the status, breed, age, or medical condition of an animal.',
          ],
        },
        {
          id: 'privacy-data',
          title: '7. Privacy & Data Use',
          paragraphs: [
            'Your use of Pet Connect is also subject to our privacy practices. We collect and process personal information such as account details, contact information, listing data, and usage activity to provide and improve our services.',
            'You agree not to misuse contact information obtained through the platform for unsolicited marketing, harassment, or any purpose unrelated to pet adoption or welfare.',
          ],
        },
        {
          id: 'intellectual-property',
          title: '8. Intellectual Property',
          paragraphs: [
            'The Pet Connect name, logo, design, software, and original platform content are owned by or licensed to Pet Connect and may not be copied, modified, or distributed without prior written permission.',
            'Trademarks, images, and content belonging to third parties remain the property of their respective owners.',
          ],
        },
        {
          id: 'disclaimers',
          title: '9. Disclaimers',
          paragraphs: [
            'Pet Connect is provided on an "as is" and "as available" basis. We do not guarantee that listings are accurate, that users will behave appropriately, or that the platform will be uninterrupted or error-free.',
            'We are not responsible for the actions, statements, health conditions, or legal status of pets, users, shelters, or third parties encountered through the platform.',
          ],
        },
        {
          id: 'limitation-liability',
          title: '10. Limitation of Liability',
          paragraphs: [
            'To the fullest extent permitted by law, Pet Connect and its team, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform.',
            'Our total liability for any claim related to the service shall not exceed the amount you paid to Pet Connect, if any, in the twelve months preceding the claim.',
          ],
        },
        {
          id: 'termination',
          title: '11. Suspension & Termination',
          paragraphs: [
            'We may suspend or terminate access to your account, remove content, or restrict features if we believe you have violated these terms, created risk for other users or animals, or engaged in unlawful activity.',
            'You may stop using the platform at any time. Provisions that by nature should survive termination, including disclaimers and limitations of liability, will remain in effect.',
          ],
        },
        {
          id: 'changes-contact',
          title: '12. Changes & Contact',
          paragraphs: [
            'We may update these Terms and Conditions from time to time. When we do, we will revise the "Last Updated" date at the top of this page. Material changes may also be communicated through the platform or by email where appropriate.',
            'If you have questions about these terms, please contact us at contactpetconnectpk@gmail.com or through our Contact Us page.',
          ],
        },
      ],
    },
  },
  chatBotSystemPrompt: `You are VetBot, a virtual veterinarian for PetConnect — a pet adoption platform in Pakistan.

STRICT RULES:
- ONLY answer questions about: animal health, pet behavior, breeds, nutrition, adoption, grooming, and pet care.
- If asked ANYTHING else, reply with exactly: "I can only help with pet and animal questions. 🐾"
- No exceptions. No suggestions. No elaboration on off-topic replies.
- For emergencies: "This sounds critical — go to an emergency vet immediately."
- Be warm, concise, and professional.
- Never act as a general assistant.`,
};

export type TermsSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  listItems?: string[];
};
