<script>
    export default {
        methods: {
            dynamicSort(property) {
                let sortOrder = 1;
                if (property[0] === "-") {
                    sortOrder = -1;
                    property = property.substr(1);
                }
                return function (a,b) {
                    let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                    return result * sortOrder;
                }
            },

            searchTree(element, matchingTitle) {
                if(element.title == matchingTitle){
                    return element;
                } else if (element.children != null){
                    var i;
                    var result = null;
                    for(i=0; result == null && i < element.children.length; i++){
                        result = searchTree(element.children[i], matchingTitle);
                    }
                    return result;
                }
                return null;
            },

            hasDuplicates(array) {
                return (new Set(array)).size !== array.length;
            },

            alphaNumeric(string) {
                string = string.toString();
                return string.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s/g, "");
            },

            numericOnly(evt){
                var charCode = (evt.which) ? evt.which : evt.keyCode
                return !(charCode > 31 && (charCode < 48 || charCode > 57));
            },

            alphaNumericWithSpace(string) {
                if (! string) return '';

                return string.replace(/[^a-zA-Z0-9 ]/g, "");
            },

            swapArrayElements(arr, indexA, indexB) {
                let temp = arr[indexA];
                arr[indexA] = arr[indexB];
                arr[indexB] = temp;
            },

            findWithAttr(array, attr, value) {
                for(var i = 0; i < array.length; i += 1) {
                    if(array[i][attr] === value) {
                        return i;
                    }
                }
                return -1;
            },

            isObjectEmpty(obj) {
                for(var prop in obj) {
                    if(obj.hasOwnProperty(prop)) {
                        return false;
                    }
                }

                return JSON.stringify(obj) === JSON.stringify({});
            },

            isEqualArrayObject(object, objToCompare) {
                if (! Array.isArray(object) || ! Array.isArray(objToCompare)) {
                    return false;
                } else if (object === objToCompare) {
                    return true;
                } else if (object.length !== objToCompare.length) {
                    return false;
                } else {
                    return (JSON.stringify(object.sort()) === JSON.stringify(objToCompare.sort()));
                }
            },

            preventSpaces(event) {
                let key = event.keyCode;

                if (key === 32) {
                    event.preventDefault();
                }
            },

            optionsHandler(array, object, remove) {
                let self = this;

                if (remove) {
                    array.forEach(function(item, index) {
                        if (object === item) {
                            array.splice(index, 1);
                        }
                    });
                } else {
                    array.push(object);
                }
            },

            removeProperty(object, propertyName) {  
                if (object.hasOwnProperty(propertyName)) {
                    delete object[propertyName];
                }
                return object;
            },

            openUrlWithPostData(url, name, params) {
                let form = document.createElement("form");
                form.setAttribute("method", "POST");
                form.setAttribute("action", url);
                form.setAttribute("target", name);

                for (let i in params) {
                    if (params.hasOwnProperty(i)) {
                        let input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = i;
                        input.value =  typeof params[i] === 'object' ? JSON.stringify(params[i]) : params[i];
                        form.appendChild(input);
                    }
                }

                let token = document.head.querySelector('meta[name="csrf-token"]');

                let input = document.createElement('input');
                input.type = 'hidden';
                input.name = '_token';
                input.value = token.content;
                form.appendChild(input);

                document.body.appendChild(form);
                window.open("", name);
                form.submit();
                document.body.removeChild(form);

                return true;
            },

            deepClone(data) {
                return JSON.parse(JSON.stringify(data));
            },

            uuid() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            },

            money(value, minimumFractionDigits = 2, maximumFractionDigits = 2) {
                if (isNaN(parseFloat(value))) {
                    value = 0;
                }
                value = Number(value);
                return Number(value.toFixed(maximumFractionDigits, minimumFractionDigits))
                    .toLocaleString('en', {
                        minimumFractionDigits: minimumFractionDigits,
                        maximumFractionDigits: maximumFractionDigits
                    });
            },

            floatToMoney(value, minimumFractionDigits = 2, maximumFractionDigits = 2){
                return this.money(value, minimumFractionDigits, maximumFractionDigits);
            },

            floatToCurrency(value, currency = 'PHP', styleFormat = 'currency', minimumFractionDigits = 2, maximumFractionDigits = 2) {
                if (isNaN(parseFloat(value))) {
                    return "0.00";
                }
                var formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: currency,
                    minimumFractionDigits: minimumFractionDigits,
                    maximumFractionDigits: maximumFractionDigits
                });
                return formatter.format(value);
            },

            moneyToFloat(value) {
                let valueString = ""+ value;
                return parseFloat(valueString.replaceAll(',', ''));
            },

            moneyToFloat2(value){
                return parseFloat(value.toString().replaceAll(',', ''));
            },

            getResponseFileName(response) {
                let contentDisposition = response.headers['content-disposition'];
                let filename = contentDisposition.replace('attachment; filename=', '').split('"').join('');
                return filename;
            },

            toTitleCase(string) {
                return string.replace(
                    /\w\S*/g,
                    function(txt) {
                        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    }
                );
            },

            toKebabCase(string){
                return string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                    .map(x => x.toLowerCase()).join('-');
            },

            async downloadHttpFile(url, params, method = 'GET', responseType = 'blob') {
                let that = this;

                await axios(url, {
                    method: method,
                    url: url,
                    params: params,
                    responseType: responseType,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function(response) {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', that.getResponseFileName(response));
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                }).catch(function (error) {
                    return console.error(error);
                })
            },

            async getMinUntakenValue(
                getter,
                table,
                column,
                min,
                max,
                conditions = [],
                chart_of_account,
                endpoint = '/getMinUntakenValue'
            ) {
                let that = this;

                return await axios.get(endpoint, {
                    params: {
                        table: table,
                        column: column,
                        min: min,
                        max: max,
                        conditions: conditions,
                        chart_of_account: chart_of_account
                    }
                }).then(function(response) {
                    that.$set(getter, column, response.data);

                    return response.data;
                });
            },

            async getMinUntakenValueWithPrefix(
                getter,
                table,
                column,
                data,
                min,
                max,
                prefix,
                length,
                pad,
                conditions = [],
                endpoint = '/getMinUntakenValue',
            ) {
                let that = this;

                return await axios.get(endpoint, {
                    params: {
                        table: table,
                        column: column,
                        min: min,
                        max: max,
                        conditions: conditions
                    }
                }).then(function(response) {
                    that.$set(getter, data, prefix + response.data.toString().padStart(length, pad));
                    return response.data.toString().padStart(length, pad);
                });
            },

            parseFloatAndRound(value, places = 2) {
                let floatValue = parseFloat(value);
                return parseFloat(floatValue || 0).toFixed(places);
            },

            countDecimalPlaces(value) {
                let isFloat = ! isNaN(parseFloat(value));
                let decimals = value.split(".")[1];
                return isFloat && (decimals !== undefined) ? decimals.length : 0;
            },

            async base64ToImageFile(url, extension = 'jpeg') {
                return await fetch(url)
                    .then(res => res.blob())
                    .then(blob => {
                        const file = new File([blob], Date.now() + "." + extension);
                        return file;
                    });
            },

            preventSpecialCharacters(event){
                let regex = new RegExp("^[a-zA-Z0-9]+$");
                let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                if (! regex.test(key)) {
                    event.preventDefault();
                    return false;
                }
            },

            disableTimePickerUI() {
                let timepickers = document.querySelectorAll('.mx-datepicker .mx-input');

                timepickers.forEach((element) => {
                    element.setAttribute('disabled', 'true');
                    element.classList.add('mx-input--disabled-ui');
                });
            },

            toggleBox(event) {
                let boxContent = event.target.closest('.collapsible-box').querySelectorAll('.collapsible-box-content');
                let boxIcon = event.target.closest('.collapsible-box').querySelector('.collapsible-box-icon i');

                if (boxIcon.classList.contains('fa-angle-up')) {
                    boxIcon.classList.remove('fa-angle-up');
                    boxIcon.classList.add('fa-angle-down');

                    boxContent.forEach(function(element) {
                        element.style.display = "none";
                    });
                } else {
                    boxIcon.classList.remove('fa-angle-down');
                    boxIcon.classList.add('fa-angle-up');

                    boxContent.forEach(function(element) {
                        element.style.display = "block";
                    });
                }
            },

            enumString(enums, value) {
                for (var e in enums) if (enums[e] == value) return e;
                return null;
            },
            
            filterValue(selection, value, key = 'value') {
                return selection.filter(data => data[key].includes(value));
            },

            filterArrayValues(selection, arrayValues, key = 'value') {
                let selected = [];
                arrayValues.forEach(function(value) {
                    let obj = selection.filter(function(data) {
                        return data[key] == value;
                    });
                    selected.push(obj[0])
                })
                return selected;
            }
        },
    };
</script>
