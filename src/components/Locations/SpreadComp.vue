<template>
    <div class="spred">
        <div class="container" data-aos="fade-left"  data-aos-duration="1500">
            <div class="title">
                <h2>Como se espalharam</h2>
            </div>
            <div class="text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam dolor maxime quidem beatae necessitatibus minima rem, vitae, deleniti culpa esse tempora sint, fuga nobis cum unde dolorum impedit quas ratione.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.spred {
    z-index: 1;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.container {
    width: 60%;
    height: 80%;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba(147, 147, 147, 0.37);

    border-radius: 20px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    z-index: -1;

    overflow: hidden;

    display: flex;
    align-items: center;
    flex-direction: column;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    height: 15%;
    width: 100%;
    border-bottom: 1px solid #0000008f;
}

.title h2 {
    color: #000000;
    font-size: 40px;
}

.text {
    width: 90%;
}

@media only screen and (max-width: 820px) {
    
    
    .container {
        width: 80%;
        height: 80%
    }
    .title h2 {
        color: #000000;
        font-size: 25px;
    }
}

@media only screen and (max-width: 820px) {
    .title h2 {
        color: #000000;
        font-size: 18px;
    }
}

</style>