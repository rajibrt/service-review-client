import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='grid justify-items-center my-4'>
            <div data-aos="fade-up" className='lg:w-3/5 w-96 shadow-xl mx-auto rounded-lg p-8 my-8'>
                <h2 className='text-2xl text-yellow-500'>Difference between SQL and NoSQL</h2>
                <p>SQL is old and sometimes constraining, but also time-tested and increasingly considered a universal interface for data analysis. NoSQL databases are new and flexible, but lack maturity and require user specialization. Pragmatically both models are useful and even growing together.<bd />

                    Ultimately, a technology is only valuable when it serves your business, usually with increased ROI. Even companies like Google, with resources to innovate ad-hoc NoSQL systems from scratch (and foundational ones at that, see MapReduce and BigTable), have found that SQL provided additional value and restored it within critical systems.<bd />

                    From migrating hand-coded SQL into compliant and governable ETL tools, to managing difficult unstructured data, to integrating relational and non-relational systems under one convenient umbrella, Talend provides solutions across data storage paradigms.<bd />

                    Centralized and automated data integration software makes source systems, whether relational or otherwise, easier to manage. Talend products include tools that even users with little ETL experience can use to optimize processes. Connectors are available for all major RDBMSs as well as leading NoSQL databases.<bd />

                    When you’re ready to get started, try Talend Data Fabric and start connecting and accelerating your data and data processes.</p>
            </div>
            <div data-aos="fade-up" className='lg:w-3/5 w-96 shadow-xl mx-auto rounded-lg p-8 my-8'>
                <h2 className='text-2xl text-yellow-500'>What is JWT, and how does it work?</h2>
                <p><strong>JWT</strong>, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>

                <h2 className='text-xl text-gray-700'>What Is JSON?</h2>
                <p>
                    For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.
                </p>
                <h2 className='text-xl text-gray-700'>  What Are Tokens?</h2>
                <p>

                    Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves.
                </p>
            </div>
            <div data-aos="fade-up" className='lg:w-3/5 w-96 shadow-xl mx-auto rounded-lg p-8 my-8'>
                <h2 className='text-2xl text-yellow-500'>What is the difference between javascript and NodeJS?</h2>
                <p>
                    <strong>1.</strong> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.<br />

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.<br />

                    <strong>2.</strong> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.<br />

                    <strong>3.</strong> Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.<br />

                    <strong>4.</strong> A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.<br />

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.<br />

                    <strong>5.</strong> The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.<br />

                    Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.<br />
                </p>
            </div>
            <div data-aos="fade-up" className='lg:w-3/5 w-96 shadow-xl mx-auto rounded-lg p-8 my-8'>
                <h2 className='text-2xl text-yellow-500'>How does NodeJS handle multiple requests at the same time?</h2>
                <p>
                    For most of this answer I’m assuming that “millions of requests” means at least “per day”, if not “per second,” since millions of requests per month should peak at just over a hundred requests per second if it’s spread mostly evenly, or if your load is extremely uneven, maybe as much as 1000–2000 per second at peak times. A reasonably well-written Node.js server should be able handle that load on one mid-sized server. For at least some definitions of “reasonable”. :)<br />

                    There are a number of specific things you can do to improve your concurrency on one server.<br />

                    You can use the Cluster[1] module to allow your JavaScript to run in parallel on multiple CPUs. The general advice here is to not fork more threads than CPUs, but I’ve seen cases where forking to twice the number of threads as CPUs can be helpful. Profiling is important.<br />

                    To improve the ability of each Node.js thread make requests in parallel, you can increase its internal concurrency by increasing UV_THREADPOOL_SIZE.[2] If your app has a tendency to stall due to many sub-requests being filled, a larger threadpool size (within reason!) can improve its overall throughput. It’s important to profile to determine what size is optimal for your usage patterns.<br />

                    You can offload any CPU-intensive tasks to secondary servers via a message queue, a serverless function, or simply another API, so that your Node service is just making a non-blocking request to a message queue, and the work is done in a blocking manner on a completely different server.<br />

                    But beyond that, it’s the architecture and specific code design patterns that matter most. And there are is no “quick list of ten ways to make your app faster” that will give you the insight you need to create the right architecture.<br />

                    I’ve seen Node servers that were taking seconds to respond to what should have been extremely quick database queries, just because they were naively using an ORM that was querying way too much data from the server instead of what they actually needed. I’ve seen databases designed such that data that should have been available in one quick request required several JOINs.<br />

                    I’ve seen networking patterns where a new request was started for every piece of data that the service needed, in sequence, instead of making the requests in parallel or packing the queries into a single request. I’ve seen data processed in a brute force manner that was easy for a developer to assemble but that blocked the entire Node.js event loop for over 60 seconds (!!) because the developer had accidentally turned a simple loop into an  𝑂(𝑛2)  algorithm and the query was iterating over an  𝑛  of 90k elements.

                    I like to paraphrase the opening line to Anna Karenina: Happy families are all alike; every unhappy family is unhappy in its own way — in this case, “Well-designed code always looks alike, whereas every code disaster is unique.”<br />

                    Some problems can be detected in advance by a sufficiently skilled developer; that’s where the concept of “code smells”[3] comes from. As a developers gain skill and experience, there are certain anti-patterns that they will recognize as problematic.<br />

                    So the real way to create a system that can handle millions of requests per second is to hire an expert who can understand the complete system and how its components will interact, and who can also track down where and why the system isn’t performing as expected. Even an experienced developer may not always get it perfect the first time, but they should have the appropriate skills and tools to track down where the bottlenecks are.<br />
                </p>
            </div>
        </div>
    );
};

export default Blog;