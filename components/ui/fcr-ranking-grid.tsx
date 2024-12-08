'use client'

const fansData = [
  { name: 'ファン1', avatarPath: '/avatars/girl-01.png' },
  { name: 'ファン2', avatarPath: '/avatars/girl-02.png' },
  { name: 'ファン3', avatarPath: '/avatars/girl-03.png' },
  { name: 'ファン4', avatarPath: '/avatars/girl-04.png' },
  { name: 'ファン5', avatarPath: '/avatars/user-05.png' },
  { name: 'ファン6', avatarPath: '/avatars/user-01.png' },
  { name: 'ファン7', avatarPath: '/avatars/user-02.png' },
  { name: 'ファン8', avatarPath: '/avatars/user-03.png' },
  { name: 'ファン9', avatarPath: '/avatars/user-04.png' },
  { name: 'ファン10', avatarPath: '/avatars/user-05.png' },
];

export function FCRRankingGrid() {
  return (
    <div className="w-full">
      {/* タイトル */}
      <h2 className="text-sm font-bold text-black mb-3 px-1">
        Ranking Top 10
      </h2>

      {/* グリッド本体 */}
      <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
        <div className="absolute inset-0 bg-white/5 border-2 border-black flex">
          {/* 左側のグリッド */}
          <div className="w-[52%] h-full border-r-2 border-black flex items-center justify-center">
            <img 
              src={fansData[0].avatarPath} 
              alt={fansData[0].name}
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* 右側のグリッド */}
          <div className="w-[48%] h-full flex flex-col">
            {/* 上段のグリッド（2分割） */}
            <div className="flex-1 border-b-2 border-black flex">
              <div className="w-[52%] h-full border-r-2 border-black flex items-center justify-center">
                <img 
                  src={fansData[1].avatarPath} 
                  alt={fansData[1].name}
                  className="h-full object-cover"
                />
              </div>
              <div className="w-[48%] h-full flex items-center justify-center">
                <img 
                  src={fansData[2].avatarPath} 
                  alt={fansData[2].name}
                  className="h-full object-cover"
                />
              </div>
            </div>
            
            {/* 中段のグリッド（3分割） */}
            <div className="flex-1 border-b-2 border-black flex">
              <div className="w-[37%] h-full border-r-2 border-black flex items-center justify-center">
                <img 
                  src={fansData[3].avatarPath} 
                  alt={fansData[3].name}
                  className="h-full object-cover"
                />
              </div>
              <div className="w-[33%] h-full border-r-2 border-black flex items-center justify-center">
                <img 
                  src={fansData[4].avatarPath} 
                  alt={fansData[4].name}
                  className="h-full object-cover"
                />
              </div>
              <div className="w-[30%] h-full flex items-center justify-center">
                <img 
                  src={fansData[5].avatarPath} 
                  alt={fansData[5].name}
                  className="h-full object-cover"
                />
              </div>
            </div>

            {/* 下段のグリッド（4分割） */}
            <div className="flex-1 flex">
              <div className="w-[28%] h-full border-r-2 border-black flex items-center justify-center">
                <img 
                  src={fansData[6].avatarPath} 
                  alt={fansData[6].name}
                  className="h-full object-cover"
                />
              </div>
              <div className="w-[26%] h-full border-r-2 border-black flex items-center justify-center">
                <img 
                  src={fansData[7].avatarPath} 
                  alt={fansData[7].name}
                  className="h-full object-cover"
                />
              </div>
              <div className="w-[24%] h-full border-r-2 border-black flex items-center justify-center">
                <img 
                  src={fansData[8].avatarPath} 
                  alt={fansData[8].name}
                  className="h-full object-cover"
                />
              </div>
              <div className="w-[22%] h-full flex items-center justify-center">
                <img 
                  src={fansData[9].avatarPath} 
                  alt={fansData[9].name}
                  className="h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 