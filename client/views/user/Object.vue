<template>
    <div>
        {{msg}}
    </div>
</template>
<script>export default {
    data() {
            return {
            msg: 'function'
            };
    },
    mounted() {
            const child = { test: 'aaa' };
            const father = { test2: 'ccc' };
            console.log('test' in child);
            Object.setPrototypeOf(child, father);
            console.log('test2' in child);

            function Ninja() {}
            Ninja.prototype.swingSword = function() {
                return true;
            };
            const ninja2 = new Ninja();
            console.log(ninja2.swingSword());
            this.testExtends();
            this.testEs6();
            this.testEs6Extends();
    },
    components: {},
    methods: {
            testExtends() {
                function Person() {}
                function Ninja() {}

                Ninja.prototype = new Person();
                const ninja = new Ninja();
                console.log('testExtends', ninja instanceof Ninja);
                console.log('testExtends', ninja instanceof Person);
                console.log('testExtends', ninja.constructor === Person);
            },
            testEs6() {
                class Ninja {
                    constructor(name, level) {
                        this.name = name;
                        this.level = level;
                    }
                    swingSword() {
                        return true;
                    }
                    static compare(ninja1, ninja2) {
                        return ninja1.level - ninja2.level;
                    }
                }
                const ninja1 = new Ninja('fan', 100);
                const ninja2 = new Ninja('ada', 10);
                console.log('testEs6', Ninja.compare(ninja1, ninja2));
            },
            testEs6Extends() {
                class Person {}

                class Ninja extends Person {
                    constructor(name, level) {
                        super();
                        this.name = name;
                        this.level = level;
                    }
                    swingSword() {
                        return true;
                    }
                    static compare(ninja1, ninja2) {
                        return ninja1.level - ninja2.level;
                    }
                }
                const ninja = new Ninja();
                console.log('testEs6Extends', ninja instanceof Ninja);
                console.log('testEs6Extends', ninja instanceof Person);
                console.log('testEs6Extends', ninja.constructor === Person);
            }
    }
};
</script>
