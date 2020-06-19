# binary-calculator
Binary Calculator API (NodeJS)

- To access Back-End API:
	 ```
	$ npm i
	$ npm run dev
	```
> API runs on [http://localhost:3333/calculate](http://localhost:3333/calculate)
- The /calculate method is called with POST HTTP method
- The body request must be:
  The operation field eg: (+,-,*,/,%)
    ```
	{
        "operation": "%",
        "value1": "00010100",
        "value2": "00000011"
    }
	```

    
