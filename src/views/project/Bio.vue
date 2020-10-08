<template>
    <div>
        <div id="Overview"><!--纯文字-->
            <h2>Overview</h2>
            <p>
                We constructed a microbial sensor which can determine environmental contaminants by detecting some biological indicators to evaluate the effects of DNA damage. Using biological indicators to assess the degree of DNA damage and its physiological effects is irreplaceable. We can also conduct an in-depth evaluation of individual health in this way.

            </p>
        </div>
        <div id="Design"><!--图片+文字-->
            <div id="Card">
                <h2>Design</h2>
                <div id="cardPhoto" >
                    <img id="Photo1" src="https://2019.igem.org/wiki/images/4/41/T--BIT--Bio9.png">
                </div>
                <div id="cardText">
                    We use engineering bacteria to build our microbial sensors. Based on the principle that certain chemicals or radiation can cause DNA damage and then initiating the SOS response, we screened expression vectors, SOS response-inducible promoters and reporter genes to construct engineered bacteria, through the promoter’s response to certain chemicals to control the expression of reporter genes. We want to identify whether the chemicals being detected can damage DNA and describe the degree of DNA damage from the chemicals. The technical route is shown in the following figure.
                </div>
            </div>
            <div id="advantages">
                <h2>Advantages</h2>
                <p>This approach has three advantages:</p>
                <ul><!--列表-->
                    <li class="li_1">1.Easy and simple to handle. It can achieve that using the same bacterial strain to detect different kinds of reagents which can damage DNA, lowering the difficulty of detection;</li>
                    <li class="li_1">2.Detect quickly. It only takes two hours to detect once. And there is no large equipment required;</li>
                    <li class="li_1">3.The cultivation cost of engineering bacteria is low. The dose of reagents for detection is small. We use the 96-well plate which is suitable for high-throughput testing and conducive to automation.</li>
                </ul>
                <p >After we successfully built the microbial sensor, it can detect different kinds of reagents those can cause DNA damage, such as anticancer agents, antibiotic drugs, alkylating agents and oxidation agents, and provides a fast, accurate quantitative analytical approach for evaluating the risks and hazards of known, unknown, and potentially toxic substances. In addition, we will optimize the performance of the microbial sensor in the future, expanding its detection range and improving its sensitivity.</p>
                <p>At first, we used the SOS response-induced dinD and umuDC promoters to prove that DNA damaging agents do not affect protein expression efficiency, which will make the E. coli do not synthesize green fluorescent protein. So we can ensure that the gene line can normally produce fluorescence in E. coli when we use DNA reagents.</p>
                <p>And then we used the SOS response-induced dnaK promoters to building our biosensor. One takes the dnaK promoter, the other takes the optimized GFP fluorescent protein gene, which is in the part BBa_E0240. We got some data.</p>
                <p>The three gene lines are in the following.</p>
            </div>
            <div id="Genelines"><!--纯图片-->
                <img id="Photo2" src="https://2019.igem.org/wiki/images/c/ca/T--BIT--bionew2.jpeg">
            </div>
            <p>Then we wanted to improve our project. So We have successfully constructed two plasmids through molecular cloning and synthetic biology
                methods. One takes the SOS response-induced RecA promoter, the other takes the optimized eGFP
                fluorescent protein gene. We transferred the constructed plasmid into the expression vector of
                E. coli BL21 (DE3), verified its function and found that it has a good response to DNA damage
                agents and correct expression of enhanced fluorescent protein. We can transfer the plasmid into
                different E. coli strains. The genetic circuit is shown below.</p>
            <div id="mulcard"><!--一框多图-->
                <div id="mulcardimg">
                    <img class="Photo3" src="https://2019.igem.org/wiki/images/7/75/T--BIT--Bio10.png">
                    <img class="Photo3" src="https://2019.igem.org/wiki/images/c/c0/T--BIT--Bio11.png">
                </div>
                <div id="mulcardtext">
                    <span>Figure (left) the sensor construction strategy based on recA promoter</span>
                    <br>
                    <span>Figure (right)the sensor principle based on SOS response</span>
                </div>
            </div>
            <p>We used many kinds of DNA damage agents and other agents to induce the microbial sensor we have
                successfully constructed. See protocols for the detailed experimental procedures</p>

        </div>
        <div id="Protocols">
            <h2>Protocols</h2>
            <h4>1.Obtain the strain</h4>
            <div id="Ptext">
                <ul>
                    <li class="li_1">(1)Clone the recA promoter:</li>
                    <p>Use the TIANamp bacteria DNA kit (TianGen, DP302) to extract the genomic DNA of E.coli
                MG1655. The recA promoter fragment was cloned from the genome of E.coli MG1655 strain.
            </p>
                    <p>Add the EcoRⅠ site to the sense primer :</p>
                    <p>recA: 5’-AGGAgaattcCAGATGATCGGCGTACGCG-3’(there are four protective bases in the 5’ end);</p>
                    <p>umuDC: 5’- GCGAATTCGTCACAATTTCGCGG -3’ ;</p>
                    <p>dinD: 5’- GGAGAATTCCGCCCACTCAAAC -3’ ;</p>
                    <p>dnaK: 5’- GCGAATTCCCCATCTAAACGTCTCC -3’ .</p>
                    <p>Add the XbaⅠ site to the reverse primer :</p>
                    <p>recA: 5’-CATGtctagaTTTTACTCCTGTCATGCCGGG-3’(there are four protective bases in the 5’ end);</p>
                    <p>umuDC: 5’- GGATCTAGAATAGTTAGCCGGGC -3’ ;</p>
                    <p>dinD: 5’-GCTCTAGATGTTCGTTCATTGCCC-3’;</p>
                    <p>dnaK: 5’-GGCTCTAGAGCGCAAAAGCACAA-3’ .</p>
                    <p>The PCR reaction system: 25μL 2×PCR Mastermix(TianGen), 2μL primers, 2μL genomic
                template, add ddH2O to 50μL.Reaction conditions: pre-denaturation at 94℃ for 3min, 30s
                at 94℃, annealing gradient at 52-62℃ for 30s, extension at 72℃ for 1min, extension at
                72℃ for 5min after 30 cycles, and insulation at 10℃.</p>
                    <p>Theoretically, the length of the amplified recA promoter fragment is about 390bp, and the
                RecA sequence was shown in appendixⅡ. Isolate the PCR products by agarose gel
                electrophoresis, the electrophoresis conditions: 1% agarose, 110V, 35min, 1×TAE
                electrophoresis buffer.</p>
                    <li class="li_1">(2) Construct the plasmid:</li>
                    <p>After the amplification, recover the recA promoter which takes the EcoRⅠ site and XbaⅠ
                site and the pUC19-egfp.Then enzyme ligate them. The enzyme digestion system: 17 μL
                recovered fragment (puc19-egfp), 2 μL NEBuffer2.1, 0.5 μL EcoRI restriction enzyme
                (NEB), 0.5 μL XbaI restriction enzyme (NEB), mix them at 37℃ and digest for 3 hours.</p>
                    <p>Perform agarose gel electrophoresis for separation (the condition is 1% agarose, 110V, 35min,
                1×TAE electrophoresis buffer).Use the AxyPrep DNA gel recovery kit to recover DNA fragments.</p>
                    <p>Glue the recovered target gene fragment and the puc19-egfp. In order to prevent
                self-ligation of the carrier, the amount of the carrier should be less than the amount
                of the target gene. Enzyme ligation system: 14 μL recA fragment, 3μL puc19-egfp, 2μL T4
                DNA ligase buffer (10×), 1μL T4 DNA ligase, 16℃overnight.</p>
                    <li class="li_1">(3) Transfer the production of the enzyme ligation and Screen the positive monoclonal antibody</li>
                    <p>Take 5μLBBa_E0240 and transfer it into E.coli Trans5α competent cells . Specific conditions
                are as following: transform the obtained BBa_E0240 plasmid to E. coli trans5 α, take the
                competent cells (TransGen Biotech) out of -80 ° c and put on ice, add 5mul puc19-egfp plasmid
                to the 50mul competent cells and mix them well, put the plasmid on the ice for 30 minutes,
                heat it for 90 seconds at 42 ° c, and then place it on ice for 2min.</p>
                    <p>Take 5μL Puc19-recaegfp (hereinafter referred to as pre plasmid), the production of enzyme
                ligation, and transfer it into E.coli Trans5α and E.coli BL21 (DE3) competent cells under
                the same conditions above.</p>
                    <p>Apply 100μL on LB plate which contains 100 μg/mL of ampicillin resistance, culture it
                upside down at 37℃ overnight, select the monoclonal colony, expand the culture, send it
                to jinweizhi (Suzhou) biochemisty co., ltd for sequencing, and store the remaining
                bacteria at -20℃ for reserve.</p>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bio"
    }
</script>

<style scoped>
    #Overview{
        margin: 33px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: large;
        background-attachment: fixed;
        background-position: top;
        background-size: 500px;
        color: rgba(31, 31, 33, 0.95);
        background-color: rgb(255, 255, 255);
        text-shadow: 2px 1px 8px rgb(163, 158, 158);
        padding-left: 5cm;
        padding-right: 5cm;
    }
    #Design{

        margin: 33px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: large;
        background-attachment: fixed;
        background-position: top;
        background-size: 500px;
        color: rgba(31, 31, 33, 0.95);
        background-color: rgb(255, 255, 255);
        text-shadow: 2px 1px 8px rgb(163, 158, 158);
        padding-left: 5cm;
        padding-right: 5cm;
    }
    #cardPhoto{
        width: 220px;
        float:left;
        background-color: #ffffff;
        padding-right: 4cm;
        padding-left: 2cm;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }
    #Photo1{
        height: 150px;
    }
    .li_1{
        text-align: left;
    }
    #Genelines{
        margin: auto;
        width: 400px;
        background-color: #ffffff;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }
    #Photo2{
        height: 250px;
    }
    .Photo3{
        height: 250px;
    }
    #mulcardimg{
        background-color: #ffffff;
        margin: auto;
        width: 600px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }
    #Protocols{
        margin: 33px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: large;
        background-attachment: fixed;
        background-position: top;
        background-size: 500px;
        color: rgba(31, 31, 33, 0.95);
        background-color: rgb(255, 255, 255);
        text-shadow: 2px 1px 8px rgb(163, 158, 158);
        padding-left: 5cm;
        padding-right: 5cm;
    }
</style>
