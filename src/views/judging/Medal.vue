<template>
    <div id="medal">
        <h1>Bronze</h1>
        <p>1.Register for iGEM, spent 24 week discuss and work, and attend Giant Jamboree.</p>
        <p>2.Completed all required deliverable. Successfully finish judging form writing, wiki building, poster making and will have presentation at Giant Jamboree.</p>
        <p>3.Built attributions page.
            http://2019.igem.org/Team:BIT/Attributions</p>
        <p>4.We have successfully finish project inspiration and description writing.</p>
        <p>5.We have added quantitative experimental characterization data to an existing Part from the Registry of Standard Biological Parts. And data have been successfully accepted.
            https://2019.igem.org/Team:BIT/Judging/Parts</p>

        <h1>Silver</h1>
        <p>1.Created a BioBrick part central to our project.
            https://2019.igem.org/Team:BIT/Judging/Parts</p>
        <p>2.Have Collaboration with other iGEM teams.
            http://2019.igem.org/Team:BIT/Collaborations</p>
        <p>3.Successfully participate in Human Practices and keep doing to make sure our work is good for the world.
            http://2019.igem.org/Team:BIT/Human_Practices</p>

        <h1>Gold</h1>
        <p>1.Integrated our human practice work and some of it give us guidance or Inspiration for our project that really make our project better
            http://2019.igem.org/Team:BIT/Human_Practices</p>
        <p>2.We have created a new BioBrick Part that has a functional improvement of an existing BioBrick Part. We have performed experiments with both parts to demonstrate this improvement.
            https://2019.igem.org/Team:BIT/Judging/Parts</p>
        <p>3.We also proved our project works under realistic conditions
            http://2019.igem.org/Team:BIT/Demonstrate</p>
        <p>4.We did the modeling
            http://2019.igem.org/Team:BIT/Model</p>

        <h1>Special Prizes</h1>
        <p>1.Best Hardware
            http://2019.igem.org/Team:BIT/Hardware</p>
        <p>2.Best Integrated Human Practices
            http://2019.igem.org/Team:BIT/Human_Practices</p>
        <p>3.Best Education and Public Engagement
            http : //2019.igem.org/Team : BIT/Public_Engagement</p>
    </div>
</template>

<script>
    export default {
        name: "Medal"
    }
</script>

<style scoped>

    /*删除所有元素的外边距*/
    * {margin:0; padding:0;}

    /*居中显示盒子*/
    #medal {width:80%; margin:20px auto; padding:20px; border:2px solid #999;}

    /*标题周围的空白*/
    h1, h2, h3, h4, h5, h6 {line-height:3em; margin-bottom:.1em;}

    /*文本元素周围的空白*/
    p, ul, blockquote {line-height:2em; margin-bottom:.75em;}

    /*缩进列表*/
    ul {margin-left:32px;}

    p {font-size: 16px;}

</style>