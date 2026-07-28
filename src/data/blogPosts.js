// ─────────────────────────────────────────────
//  Blog posts — add new entries to this array
//  Each post needs a unique `slug` for routing
// ─────────────────────────────────────────────

export const blogPosts = [
  {
    id:         1,
    slug:       'building-rag-pipeline-langchain-faiss',
    title:      'Building a Production RAG Pipeline with LangChain and FAISS',
    date:       '2024-11-15',
    readTime:   '8 min read',
    tags:       ['GenAI', 'LangChain', 'RAG', 'Python', 'FAISS'],
    excerpt:    'A step-by-step guide to building a Retrieval-Augmented Generation pipeline that lets you query your own documents using natural language — with LangChain, FAISS, and the OpenAI API.',
    coverGradient: 'from-teal-500 to-cyan-700',
    content: `
      <h2>What is RAG and Why Does It Matter?</h2>
      <p>Large Language Models are powerful — but they hallucinate. They don't know about your private documents, your internal runbooks, or last week's test reports. Retrieval-Augmented Generation (RAG) solves this by grounding LLM responses in real, verifiable sources.</p>
      <p>In this post I'll walk through how I built a production-grade RAG pipeline at Amdocs to let engineers query internal documentation using plain English.</p>

      <h2>Architecture Overview</h2>
      <p>The pipeline has three main stages:</p>
      <ol>
        <li><strong>Ingestion</strong>: Load documents → split into chunks → embed with OpenAI → store in FAISS vector index.</li>
        <li><strong>Retrieval</strong>: Embed the user query → similarity search in FAISS → fetch top-k relevant chunks.</li>
        <li><strong>Generation</strong>: Pass retrieved chunks + query to the LLM → return grounded answer.</li>
      </ol>

      <h2>Step 1 — Document Loading and Chunking</h2>
      <pre><code>from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

loader = DirectoryLoader("./docs", glob="**/*.md", loader_cls=TextLoader)
documents = loader.load()

splitter = RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=64)
chunks = splitter.split_documents(documents)
print(f"Created {len(chunks)} chunks from {len(documents)} documents")</code></pre>

      <h2>Step 2 — Embedding and FAISS Indexing</h2>
      <pre><code>from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = FAISS.from_documents(chunks, embeddings)
vectorstore.save_local("./faiss_index")</code></pre>

      <h2>Step 3 — Retrieval-Augmented QA Chain</h2>
      <pre><code>from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

vectorstore = FAISS.load_local("./faiss_index", embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    return_source_documents=True,
)

result = qa_chain("What are the known failure modes for the billing module?")
print(result["result"])</code></pre>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Chunk size matters</strong>: 512 tokens with 64 overlap worked best for our technical docs. Too small → loss of context. Too large → noisy retrieval.</li>
        <li><strong>Metadata filtering</strong>: Adding metadata (team, doc type, date) to chunks and filtering at retrieval time dramatically improved precision.</li>
        <li><strong>Hybrid search</strong>: Combining BM25 keyword search with semantic similarity (ensemble retriever) reduced hallucinations on exact-match queries like error codes.</li>
        <li><strong>Evaluation</strong>: Use RAGAS to measure faithfulness, answer relevance, and context recall — don't just eyeball it.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>RAG is no longer experimental — it's a production pattern. With LangChain abstracting the plumbing and FAISS handling vector search efficiently, you can build a useful knowledge agent in a day. The real engineering work is in chunking strategy, metadata design, and evaluation.</p>
    `,
  },
  {
    id:         2,
    slug:       'automation-to-ai-engineering-journey',
    title:      'From Test Automation to AI Engineering: My Career Transition',
    date:       '2024-09-20',
    readTime:   '6 min read',
    tags:       ['Career', 'AI/ML', 'Automation', 'Learning Path'],
    excerpt:    'How I went from writing Selenium test scripts to designing neural networks and LLM pipelines — and the exact learning path I followed over 2 years to make the transition real.',
    coverGradient: 'from-purple-500 to-indigo-700',
    content: `
      <h2>Why I Decided to Transition</h2>
      <p>After 4 years of test automation at Amdocs, I was good at my job. Pytest frameworks, Selenium grids, Appium mobile testing — I'd built all of it. But I kept noticing the same pattern: the most interesting engineering problems in our team were being solved by ML models, not test scripts.</p>
      <p>When our team started using a basic ML model to predict test failure rates, I saw the future clearly. I decided to spend 2 years systematically learning ML, Deep Learning, and GenAI — while staying employed full-time.</p>

      <h2>The Learning Path (What Actually Worked)</h2>
      <h3>Year 1 — Foundations</h3>
      <ul>
        <li><strong>Machine Learning 101</strong>: Started with Andrew Ng's ML Specialization on Coursera. Non-negotiable foundation.</li>
        <li><strong>Python for Data Science</strong>: Numpy, Pandas, Matplotlib. 30 minutes every morning before work.</li>
        <li><strong>First real project</strong>: Applied ML to our own test data — predicted which test suites were likely to fail given a code diff. This got me real buy-in from management.</li>
      </ul>

      <h3>Year 2 — Deep Learning and GenAI</h3>
      <ul>
        <li><strong>Deep Learning Specialization</strong>: CNNs, RNNs, sequence models. Used our actual failure screenshots as the dataset for my CNN project.</li>
        <li><strong>PyTorch</strong>: Switched from Keras to PyTorch for flexibility. The debugging experience alone is worth it.</li>
        <li><strong>Generative AI with LLMs</strong>: DeepLearning.AI course. Eye-opening for understanding transformer internals.</li>
        <li><strong>LangChain + RAG</strong>: Built the internal knowledge agent that's now used by 20+ engineers on our team.</li>
      </ul>

      <h2>The Hardest Part</h2>
      <p>It wasn't the math. It was the identity shift. I had to stop thinking of myself as "the automation guy" and start seeing myself as an AI engineer who happens to know a lot about software quality. That reframe changed how I approached every project.</p>

      <h2>Advice for Engineers Considering This Transition</h2>
      <ol>
        <li><strong>Apply ML to your current domain first</strong>. Don't build a dog breed classifier. Build something that solves a real problem in your current job. It'll get noticed.</li>
        <li><strong>Certifications signal intent</strong>. They're not a substitute for projects, but they show employers you're serious about the transition.</li>
        <li><strong>Contribute publicly</strong>. Write blog posts (like this one!), share notebooks, open-source small tools. Your GitHub becomes your portfolio.</li>
        <li><strong>Find your ML mentor</strong>. I found mine in an online community. A 30-minute weekly call saved me months of wrong turns.</li>
      </ol>

      <h2>Where I Am Now</h2>
      <p>Today I'm deploying ML models to production, building LLM-powered tools, and actively seeking an AI/ML engineering role where I can focus on this full-time. The transition is real and achievable — it just takes intentional, consistent effort over time.</p>
    `,
  },
  {
    id:         3,
    slug:       'cnn-ui-failure-detection',
    title:      'CNN-Based UI Failure Detection: Automating Screenshot Analysis at Scale',
    date:       '2024-07-10',
    readTime:   '7 min read',
    tags:       ['Deep Learning', 'CNN', 'Computer Vision', 'QA', 'TensorFlow'],
    excerpt:    'How we trained a CNN to automatically classify UI failure screenshots into error categories, eliminating 70% of manual QA review effort using TensorFlow, Keras, and Azure GPU instances.',
    coverGradient: 'from-pink-500 to-rose-700',
    content: `
      <h2>The Problem: Screenshot Review at Scale</h2>
      <p>Our test suite generates thousands of failure screenshots every day. For years, QA engineers manually reviewed each one to determine the failure category: UI rendering bug, data mismatch, timeout error, or environmental issue. Each review took 30–60 seconds. At scale, this was unsustainable.</p>
      <p>The solution: train a CNN to classify failure screenshots automatically with high confidence, routing only uncertain cases to human reviewers.</p>

      <h2>Dataset Collection and Labeling</h2>
      <p>We had 3 years of failure screenshots stored in our CI system — roughly 45,000 images across 6 failure categories. The labeling challenge was significant: early screenshots had inconsistent labels from different engineers.</p>
      <pre><code>import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator

datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=5,
    width_shift_range=0.05,
    height_shift_range=0.05,
    zoom_range=0.1,
    horizontal_flip=False,
    validation_split=0.2
)

train_gen = datagen.flow_from_directory(
    'data/screenshots',
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical',
    subset='training'
)</code></pre>

      <h2>Model Architecture: Transfer Learning with EfficientNetB0</h2>
      <p>We started with a custom CNN but quickly switched to transfer learning — EfficientNetB0 pretrained on ImageNet. UI screenshots share low-level feature patterns (edges, shapes) with natural images, making transfer learning surprisingly effective.</p>
      <pre><code>from tensorflow.keras.applications import EfficientNetB0
from tensorflow.keras import layers, Model

base_model = EfficientNetB0(
    input_shape=(224, 224, 3),
    include_top=False,
    weights='imagenet'
)
base_model.trainable = False

x = base_model.output
x = layers.GlobalAveragePooling2D()(x)
x = layers.Dropout(0.3)(x)
x = layers.Dense(256, activation='relu')(x)
x = layers.Dropout(0.2)(x)
output = layers.Dense(6, activation='softmax')(x)

model = Model(inputs=base_model.input, outputs=output)
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)</code></pre>

      <h2>Training on Azure GPU Instances</h2>
      <p>Training on CPU would have taken days. We spun up an Azure NC6 instance (Tesla K80 GPU) and trained for 50 epochs with early stopping. The key configuration:</p>
      <ul>
        <li>Batch size: 32 (fit in GPU VRAM with mixed precision)</li>
        <li>Learning rate scheduler: ReduceLROnPlateau with patience=5</li>
        <li>Fine-tuning: After 30 epochs, unfreeze the top 20 layers of EfficientNet and fine-tune with lr=1e-5</li>
      </ul>

      <h2>Results</h2>
      <p>After fine-tuning:</p>
      <ul>
        <li><strong>Overall accuracy: 94.2%</strong> on the held-out test set</li>
        <li>Confidence threshold of 0.85 routed ~28% of images to human review</li>
        <li>For the 72% handled automatically, accuracy was 97.1%</li>
        <li><strong>Time saved: ~70% reduction</strong> in manual screenshot review</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Transfer learning is your friend</strong> for domain-specific image tasks. Don't train from scratch unless you have millions of images.</li>
        <li><strong>Confidence thresholding</strong> is essential for production — know when to say "I don't know" and defer to humans.</li>
        <li><strong>Data quality &gt; data quantity</strong>. Cleaning the noisy labels improved accuracy by 4 percentage points, more than doubling the dataset size.</li>
        <li><strong>Monitor distribution shift</strong>. As the UI evolves, retrain quarterly to maintain performance.</li>
      </ul>
    `,
  },
]
