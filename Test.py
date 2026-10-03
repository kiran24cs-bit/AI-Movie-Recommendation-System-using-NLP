import pickle
newtags=pickle.load(open("newtags.pkl","rb"))
df=pickle.load(open("df.pkl","rb"))
indices=pickle.load(open("indices.pkl","rb"))
vec=pickle.load(open("vec.pkl","rb"))
from sklearn.metrics.pairwise import cosine_similarity
from scipy.stats.distributions import cosine


def description(desc,n=10):
  desc=vec.transform([desc])
  sim_score=cosine_similarity(desc,newtags).flatten()
  similar_idx=sim_score.argsort()[::-1][0:n]
  return df["title"].iloc[similar_idx]

def recommend(title,n=10):
  if title not in indices.index:
    return description(title)
  idx=indices[title]
  sim_score=cosine_similarity(newtags[idx],newtags).flatten()
  similar_idx=sim_score.argsort()[::-1][1:n+1]
  return df.iloc[similar_idx]["title"]
search=input("Enter movie : ").title()
search=search.strip()
print(recommend(search))

# print("df:", len(df))
# print("newtags:", newtags.shape)
# print("indices:", len(indices))




# desc=input("Enter Description : ").lower()
# print(description(desc))
import pickle
newtags=pickle.load(open("newtags.pkl","rb"))
df=pickle.load(open("df.pkl","rb"))
indices=pickle.load(open("indices.pkl","rb"))
vec=pickle.load(open("vec.pkl","rb"))
from sklearn.metrics.pairwise import cosine_similarity
from scipy.stats.distributions import cosine
def recommend(title,n=10):
  if title not in indices.index:
    return ["Movie not found"]
  idx=indices[title]
  sim_score=cosine_similarity(newtags[idx],newtags).flatten()
  similar_idx=sim_score.argsort()[::-1][1:n+1]
  return df.iloc[similar_idx]["title"]
search=input("Enter movie : ").title()
search=search.strip()
print(recommend(search))
