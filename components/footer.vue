<template>
    <div class="min-h-screen bg-[#0E1C35] p-4 sm:p-8 md:p-12 lg:p-20 text-white">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16 lg:gap-24">
            
            <div class="first">
                <div>
                    <img class="h-[4rem] sm:h-[5rem]" src="/icons/whiteicon.png" alt="White Icon">
                    <div class="flex flex-col gap-4 sm:gap-8 mt-6">
                        <h1 class="text-2xl sm:text-3xl font-extrabold">Eco-Friendly</h1>
                        <h1 class="text-[#CFDAF4] text-sm sm:text-base">Commited to conservation, using green <br class="hidden sm:block"> goodas for greater future</h1>
                        <h1 class="font-extrabold text-sm sm:text-md underline underline-offset-8 decoration-slate-500">View our mission</h1>
                    </div>
                </div>
                <div class="flex flex-col gap-4 sm:gap-6 mt-12 sm:mt-24">
                    <h1 class="text-2xl sm:text-3xl font-extrabold">Subscribe Us</h1>
                    <h1 class="text-[#CFDAF4] text-sm sm:text-base">Sign-up to get $10 off!</h1>
                </div>
                <div class="mt-8 sm:mt-16 w-full max-w-xs sm:max-w-sm mx-auto md:mx-0">
                    <div class="flex justify-between items-center gap-4">
                        <h1 class="font-bold text-[#CFDAF4] text-sm sm:text-base">Email Adress</h1>
                        <primary-button
                            title="SIGN UP"
                            background-color="white"
                            text_color="black"
                            class="font-bold px-3 py-2 sm:px-5 sm:py-3 text-base sm:text-xl"
                        />
                    </div>
                    <div class="border-b border-slate-500 mt-4"></div>
                </div>
            </div>

            <div class="second">
                <div>
                    <img class="h-[4rem] sm:h-[5rem]" src="/icons/whiteicon.png" alt="White Icon">
                    <div class="flex flex-col gap-4 sm:gap-8 mt-6">
                        <h1 class="text-2xl sm:text-3xl font-extrabold">Circular Economy</h1>
                        <h1 class="text-[#CFDAF4] text-sm sm:text-base">Promoting sustainability by reuse,<br class="hidden sm:block"> recycling, & ethical manufacturing</h1>
                        <h1 class="font-extrabold text-sm sm:text-md decoration-slate-500 underline underline-offset-8">How we work</h1>
                    </div>
                </div>
                <div class="mt-12 sm:mt-24">
                    <h1 class="text-2xl sm:text-3xl font-extrabold">Need Help?</h1>
                    <div class="mt-4 sm:mt-7 flex flex-wrap gap-4 sm:gap-6">
                        <div v-for="(title, i) in buttonTitle" :key="i" >
                            <primary-button
                                :title="title"
                                class="outline outline-3 !rounded-full outline-2 outline-[#21344D] !px-4 !py-2 :!px-8 sm:!py-3 sm:text-lg w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="third">
                <div>
                    <img class="h-[4rem] sm:h-[5rem]" src="/icons/whiteicon.png" alt="White Icon">
                    <div class="flex flex-col gap-4 sm:gap-8 mt-6">
                        <h1 class="text-2xl sm:text-3xl font-extrabold">1% for the Planet</h1>
                        <h1 class="text-[#CFDAF4] text-sm sm:text-base">Sharing 1% of our earnings to help<br class="hidden sm:block"> sustainability & conservation</h1>
                        <h1 class="font-extrabold text-sm sm:text-md underline underline-offset-8 decoration-slate-500">Help our mission</h1>
                    </div>
                </div>
                <div class="flex flex-col gap-4 sm:gap-6 mt-12 sm:mt-24">
                    <h1 class="text-2xl sm:text-3xl font-extrabold text-[#CFDAF4]">More info</h1>
                    <h1 class="text-[#CFDAF4] text-sm sm:text-base">Privacy Policy</h1>
                    <h1 class="text-[#CFDAF4] text-sm sm:text-base">Terms & Conditions</h1>
                    <h1 class="text-[#CFDAF4] text-sm sm:text-base">Warranty Information</h1>
                    <h1 class="text-[#CFDAF4] text-sm sm:text-base">Gift Cards</h1>
                </div>
            </div>

            <div class="fourth">
                <div>
                    <img class="h-[4rem] sm:h-[5rem]" src="/icons/whiteicon.png" alt="White Icon">
                    <div class="flex flex-col gap-4 sm:gap-8 mt-6">
                        <h1 class="text-2xl sm:text-3xl font-extrabold">Traceability</h1>
                        <h1 class="text-[#CFDAF4] text-sm sm:text-base">Ensure transparency at all stages,<br class="hidden sm:block"> sourcing to manufacturing</h1>
                        <h1 class="font-extrabold text-sm sm:text-md underline underline-offset-8 decoration-slate-500">Help our mission</h1>
                    </div>
                </div>
                <div class="flex flex-col gap-4 sm:gap-6 mt-12 sm:mt-24 text-[#CFDAF4]">
                    <h1 class="text-sm sm:text-base">Our Story</h1>
                    <h1 class="text-sm sm:text-base">Careers</h1>
                    <h1 class="text-sm sm:text-base">Showroom</h1>
                    <h1 class="text-sm sm:text-base">Sustainability</h1>
                </div>
            </div>
        </div>
    
        <div class="border-t mt-8 sm:mt-16 border-slate-500 pt-4 sm:pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">

                <div class="w-full md:w-auto text-center md:text-left">
                     <h1 class="text-base sm:text-xl font-bold">© 2025 Rylic Studio | All Rights Reserved</h1>
                </div>

                <div class="social_icons flex gap-4 sm:gap-6">
                   <img class="h-10 w-10 sm:h-14 sm:w-14" src="/images/linkedin.png" alt="LinkedIn">
                   <img class="h-10 w-10 sm:h-14 sm:w-14" src="/images/facebook.png" alt="Facebook">
                   <img class="h-10 w-10 sm:h-14 sm:w-14" src="/images/twitter.png" alt="Twitter">
                </div>

                <div class="payment_icons flex gap-4 sm:gap-6">
                    <img class="h-10 w-10 sm:h-14 sm:w-14" src="/images/visa.png" alt="Visa">
                    <img class="h-10 w-10 sm:h-14 sm:w-14" src="/images/american-express.png" alt="American Express">
                    <img class="h-10 w-10 sm:h-14 sm:w-14" src="/images/visa.png" alt="Visa">
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const buttonTitle = ['Login', 'Return & Exchanges', 'Order Status', 'Support', 'Loyalty Program'];
</script>