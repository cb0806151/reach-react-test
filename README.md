# React + Reach: Connecting and Funding an Algorand Test Wallet 

<details><summary><strong>Description</strong></summary>
<p>  

To follow along and create the above repository, please see the <a href="https://youtu.be/n9FjHvir74c" target="_blank">companion tutorial video.</a>

This application is a showcase of connecting a React application to an Algorand testnet using Reach and the Algosigner extension. It features connecting to a test wallet and then funding that test wallet with fake funds for use in testing contracts. I kept it rather simple to serve as a bite-sized introduction to dapp development by way of a feature common across many dapps during development.
</p>
</details>
<details><summary><strong>Setup Instructions</strong></summary>
<p>

- clone the repository
- open a terminal to the `reach-react-test` folder 
- from there run the command `yarn install`
- once that has completed run `cd src`
- (if on Windows) run the `wsl` command to switch over to linux
- run the `curl https://raw.githubusercontent.com/reach-sh/reach-lang/master/reach -o reach ; chmod +x reach` command to download reach into the src folder
- run the `./reach version` command to ensure it installed
- run the `REACH_CONNECTOR_MODE=ALGO ./reach devnet` command to start the testnet
- start up a new terminal and navigate to the `reach-react-test` folder 
- now run the `yarn dev` command to run the applications frontend
- navigate to the localhost link given by the above command to view the application

</p>
</details>

<details><summary><strong>Further Reading & Challenges</strong></summary>
<p>  

If you are just getting started with dapp development, I highly recommend the <a href="https://docs.reach.sh/tut.html" target="_blank">Reach tutorial</a>. It will show you the foundation of contract creation using Reach and go from contract interaction through the cli back here to the frontend by the end of the tutorial.  

If after that you’d like a bit of a challenge, <a href="https://github.com/reach-sh/reach-lang/tree/master/examples" target="_blank">Reach has a ton of dapp examples</a> that haven’t been turned into web applications yet; taking the time to transcribe them instead of just copy and pasting them will increase your familiarity with the Reach contract language while connecting those contracts to the frontend will increase your familiarity with the workflow of dapp development.
</p>
</details>